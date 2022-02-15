import { WGErrorCode } from "./error.codes";

/**
 * Generic erorr definition for Wodo Gaming. WGErros contain a specific WGErrorCode that is defined in the general error catalog.
 * 
 * WGError extends Error class in type script so that it can be used/handled system wide.
 */
export class WGError extends Error {
    
    private errorCode:WGErrorCode;

    constructor(errorCode:WGErrorCode, message:string) {
        super(errorCode.code + ":" + errorCode.description + ". Message:"+message);
        this.errorCode = errorCode;
    }

    public getErrorCode(): WGErrorCode {
        return this.errorCode;
    }
}