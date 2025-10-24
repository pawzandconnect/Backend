import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  status: number;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponse<T>> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const statusCode = response.statusCode;

    return next.handle().pipe(
      map((data) => {
        if (data && data.hasOwnProperty('success') && data.hasOwnProperty('data')) {
          return data;
        }
        const responseData = data?.data;
        const message = data?.message || 'Operation successful';

        return {
          message,
          success: true,
          status: statusCode,
          data: responseData,
        };
      }),
    );
  }
}
