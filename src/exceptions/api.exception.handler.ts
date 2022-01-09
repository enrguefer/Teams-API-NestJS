import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { HttpAdapterHost } from '@nestjs/core';
import { LOGGER } from "src/app.module";

import { ApiException } from "./types/api.exception";

@Catch()
export class ApiExceptionHandler implements ExceptionFilter {

    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch( exception : unknown, host: ArgumentsHost ) : void {

        LOGGER.error("IN: ApiExceptionHandler::catch: exception: ", exception);

        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();

        const httpStatusCode = exception instanceof ApiException 
            ? (exception as ApiException).getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;
        
        const message = exception instanceof ApiException 
            ? (exception as ApiException).message
            : "Internal Server Error";


        const responseBody = {
            statusCode: httpStatusCode,
            message : message,
            timestamp: new Date().toISOString(),
            path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        LOGGER.error("OUT: ApiExceptionHandler::catch: response: ", responseBody);
        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatusCode);
    }
}