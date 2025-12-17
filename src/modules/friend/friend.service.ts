import { Injectable, Logger } from '@nestjs/common';
import { FriendRepository } from './friend.repository';
import { ReviewFriendRequestDto, SendFriendRequestDto } from './dto';
import { AuthTokenClaim, RequestDecision } from '@common/typings';
import { ExceptionFactory, ExceptionHandler, Helpers } from '@utils';
import { FriendRequestStatus } from '@prisma/client';

@Injectable()
export class FriendService {
  private logger = new Logger(FriendService.name);
  constructor(private readonly friendRepo: FriendRepository) {}

  async sendRequest(dto: SendFriendRequestDto, owner: AuthTokenClaim) {
    const { receiver_id } = dto;
    if (!receiver_id) {
      throw ExceptionFactory.badRequest('Please select the person you want to add as friend');
    }

    if (receiver_id.trim() === owner.sub) {
      throw ExceptionFactory.badRequest("You can't add yourself as a friend");
    }

    const [owner_id, friend_owner_id] = Helpers.normalizePair(owner.sub, receiver_id);
    try {
      const alreadyFriends = await this.friendRepo.findFriendsConnection({
        owner_id,
        friend_owner_id,
      });
      if (alreadyFriends) {
        throw ExceptionFactory.badRequest("You're friends already");
      }

      const pending = await this.friendRepo.findPendingFriendRequestBetween({
        userA: owner.sub,
        userB: receiver_id,
      });
      if (pending) {
        throw ExceptionFactory.badRequest('A friend request is already pending');
      }

      // Create request
      const opsResult = await this.friendRepo.createFriendRequest({
        receiver_owner_id: receiver_id,
        sender_owner_id: owner.sub,
      });

      return { message: `Friend request sent`, data: opsResult };
    } catch (e) {
      this.logger.error('Failed to send friend request', e.message);
      if (ExceptionFactory.isUniqueViolation(e)) {
        throw ExceptionFactory.badRequest('Friend request already exists');
      }
      ExceptionHandler.handle(e);
    }
  }

  async reviewRequest(dto: ReviewFriendRequestDto, owner: AuthTokenClaim) {
    const { friend_req_id, decision } = dto;
    if (!friend_req_id) {
      throw ExceptionFactory.badRequest('Select the friend request you want to review');
    }
    if (!decision || !Object.values(RequestDecision).includes(decision)) {
      throw ExceptionFactory.badRequest(
        'Provide a decision on whether to accept or reject friend request',
      );
    }

    try {
      const friendRequest = await this.friendRepo.findFriendRequestById(friend_req_id);
      if (!friendRequest) {
        throw ExceptionFactory.notFound('Friend request not found or deleted');
      }

      if (friendRequest.status !== FriendRequestStatus.pending) {
        throw ExceptionFactory.badRequest('Friend request already reviewed');
      }

      if (friendRequest.receiver_owner_id !== owner.sub) {
        throw ExceptionFactory.badRequest('Not authorized to accept this request');
      }

      const [owner_id, friend_owner_id] = Helpers.normalizePair(
        friendRequest.sender_owner_id,
        friendRequest.receiver_owner_id,
      );

      const alreadyFriends = await this.friendRepo.findFriendsConnection({
        owner_id,
        friend_owner_id,
      });
      if (alreadyFriends) {
        throw ExceptionFactory.badRequest("You're friend with this person already");
      }

      const shouldAcceptRequest = decision === RequestDecision.accept;
      // Update friend request status, and create friend tie if accepted
      const opsResult = await this.friendRepo.storeFriendRequestReviewDecisionWithTx({
        friend_req_id,
        owner_id,
        friend_owner_id,
        shouldAcceptRequest,
      });

      const messageLabel = shouldAcceptRequest ? 'accepted' : `rejected`;
      return { message: `Friend request ${messageLabel}`, data: opsResult };
    } catch (e) {
      this.logger.error('Failed to review friend request', e.message);
      ExceptionHandler.handle(e);
    }
  }

  // Only pending requests, list - paginated
  async fetchRequests() {}

  async suggestedFriends() {}
}
