import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { HttpAdapterHost } from '@nestjs/core';

import { ApiException } from "./types/api.exception";

@Catch()
export class ApiExceptionHandler implements ExceptionFilter {

    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch( exception : unknown, host: ArgumentsHost ) : void {

        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();

        const httpStatusCode = exception instanceof ApiException 
            ? (exception as ApiException).getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;
        
        const message = exception instanceof ApiException 
            ? (exception as ApiException).message
            : "Internal Server Error";

        //TODO: Sacar por consola las excepciones

        const responseBody = {
            statusCode: httpStatusCode,
            message : message,
            timestamp: new Date().toISOString(),
            path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatusCode);
    }
}