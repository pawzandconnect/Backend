import { Injectable, Logger } from '@nestjs/common';
import { ConnectionRepository } from './connection.repository';
import { ReviewConnectionRequestDto, SendConnectionRequestDto } from './dto';
import { AuthTokenClaim, RequestDecision } from '@common/typings';
import { ExceptionFactory, ExceptionHandler, Helpers } from '@utils';
import { ConnectionRequestStatus } from '@prisma/client';

@Injectable()
export class ConnectionService {
  private logger = new Logger(ConnectionService.name);
  constructor(private readonly connectionRepo: ConnectionRepository) {}

  async sendRequest(dto: SendConnectionRequestDto, owner: AuthTokenClaim) {
    const { receiver_id } = dto;
    if (!receiver_id) {
      throw ExceptionFactory.badRequest('Please select the pet you want to add as a connection');
    }

    if (receiver_id.trim() === owner.pet_id) {
      throw ExceptionFactory.badRequest("You can't add your pet as a connection");
    }

    const [pet_id, connected_pet_id] = Helpers.normalizePair(owner.pet_id, receiver_id);
    try {
      const alreadyConnected = await this.connectionRepo.findPetsConnection({
        pet_id,
        connected_pet_id,
      });
      if (alreadyConnected) {
        throw ExceptionFactory.badRequest("You're connected to this pet already");
      }

      const pending = await this.connectionRepo.findPendingConnectionRequestBetween({
        petA: owner.sub,
        petB: receiver_id,
      });
      if (pending) {
        throw ExceptionFactory.badRequest('A connection is already pending');
      }

      // Create request
      const opsResult = await this.connectionRepo.createConnectionRequest({
        receiver_owner_id: receiver_id,
        sender_owner_id: owner.sub,
      });

      return { message: `Connection request sent`, data: opsResult };
    } catch (e) {
      this.logger.error('Failed to send connection request', e.message);
      if (ExceptionFactory.isUniqueViolation(e)) {
        throw ExceptionFactory.badRequest('Connection request already exists');
      }
      ExceptionHandler.handle(e);
    }
  }

  async reviewRequest(dto: ReviewConnectionRequestDto, owner: AuthTokenClaim) {
    const { connection_req_id, decision } = dto;
    if (!connection_req_id) {
      throw ExceptionFactory.badRequest('Select the friend request you want to review');
    }

    if (!decision || !Object.values(RequestDecision).includes(decision)) {
      throw ExceptionFactory.badRequest(
        'Provide a decision on whether to accept or reject connection request',
      );
    }

    const connectionRequest =
      await this.connectionRepo.findConnectionRequestById(connection_req_id);
    if (!connectionRequest) {
      throw ExceptionFactory.notFound('Connection request not found or deleted');
    }

    if (connectionRequest.status !== ConnectionRequestStatus.pending) {
      throw ExceptionFactory.badRequest('Connection request already reviewed');
    }

    if (connectionRequest.receiver_pet_id !== owner.sub) {
      throw ExceptionFactory.badRequest('Not authorized to accept this request');
    }

    const [pet_id, connected_pet_id] = Helpers.normalizePair(
      connectionRequest.sender_pet_id,
      connectionRequest.receiver_pet_id,
    );

    const alreadyConnected = await this.connectionRepo.findPetsConnection({
      pet_id,
      connected_pet_id,
    });
    if (alreadyConnected) {
      throw ExceptionFactory.badRequest("You're connected with this pet already");
    }

    const shouldAcceptRequest = decision === RequestDecision.accept;
    // Update connection request status, and create friend tie if accepted
    const opsResult = await this.connectionRepo.storeConnectionRequestReviewDecisionWithTx({
      connection_req_id,
      pet_id,
      connected_pet_id,
      shouldAcceptRequest,
    });

    const messageLabel = shouldAcceptRequest ? 'accepted' : `rejected`;
    return { message: `Connection request ${messageLabel}`, data: opsResult };
  }
  catch(e) {
    this.logger.error('Failed to review friend request', e.message);
    ExceptionHandler.handle(e);
  }

  // Only pending requests, list - paginated
  async fetchRequests() {}

  async suggestedConnections() {}
}
