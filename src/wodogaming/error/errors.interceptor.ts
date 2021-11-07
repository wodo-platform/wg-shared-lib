import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Observable, throwError, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WGError } from './wg.error';

/**
 * Generic error interceptor to intercept errors including (@link WGError) and convert them meaningful HttpExceptions.
 * The interceptor is used with http controller in Nest framework. For that reason, all errors are bundled into HttpException.
 * 
 * Other controllers and transfports should implement different interfeptors in order to do proper exception handling.
 * 
 * Each microservice or modules implemented with nodejs & nest framework should configure and anable the interceptor in their module definitions
 * 
 * ```nodejs
 *  providers: [
 *   {
 *     provide: APP_INTERCEPTOR,
 *     useClass: ErrorsInterceptor,
 *   }, 
 *   AppService
 *  ]
 * ```
 */
@Injectable()
export class ErrorsInterceptor implements NestInterceptor {

    private readonly logger = new Logger(ErrorsInterceptor.name);


    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        //this.logger.debug('start-class:'+context.getClass().name +"->"+context.getHandler().name);

        //const now = Date.now();
        return next
            .handle()
            .pipe(
                //tap(() => this.logger.debug(`start-class:after... ${Date.now() - now}ms`)),
                catchError(
                    err => throwError(() => {
                        this.logger.log(JSON.stringify(err.stack));
                        if (err instanceof WGError) {
                            let wge: WGError = err as WGError;
                            return new HttpException({
                                "statusCode" : HttpStatus.NOT_FOUND,
                                "message":wge.message,
                                "errorCode": wge.getErrorCode().code,
                                "details": wge.stack // TODO: replace/erase stack trace for production env
                            }, HttpStatus.NOT_FOUND);
                        }
                        return err;
                    }
                    )
                )
            );
    }
}
