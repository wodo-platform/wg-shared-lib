/**
 * Wodo Gaming erro code definition. Each error case is presented  with a unique erorr code and categorized into different segments.
 * Error codes help developers determine the error case with specific,unique codes in busines and functional flows. Bugs and error cases
 * can be analyzed easily with the help of the specific error codes.
 * 
 * Morover, all API implementations handles error based on the wodo gaming error catalog in order to compose deterministic, realibla and user-friendly
 * exceptions. End users, UI designers and 3rd party API consumers rely on the error catalog to understand exeptions and build reactive, 
 * resilient business logic.
 * 
 * Note: do not use WG_1 inernal server error for every error case,
 */
export interface WGErrorCode {
    code:string
    description:string
}

/**
 * Error code catalog of Wodo Gaming with numeric error code segmentation
 */
export const WG_ERORCODE_PREFIX = "WG_";

export const WG_ERROR_INTERNAL_SERVER: WGErrorCode = {
    code: WG_ERORCODE_PREFIX+"1",
    description: "Internal server error. Something has gone wrong."
},

WG_ERROR_GH_VALIDATION : WGErrorCode = {
    code: WG_ERORCODE_PREFIX+"50",
    description: "Game Hub validation error."
},

WG_ERROR_GL_CREATE: WGErrorCode = {
    code: WG_ERORCODE_PREFIX+"100",
    description: "Gaming Lounge can not be created."
},
WG_ERROR_GL_CREATE_VALIDATION: WGErrorCode = {
    code: WG_ERORCODE_PREFIX+"101",
    description: "Gaming Lounge validation error."
},
WG_ERROR_GL_CREATE_EXIST: WGErrorCode = {
    code: WG_ERORCODE_PREFIX+"102",
    description: "Gaming Lounge already exists."
},
WG_ERROR_GL_NOT_FOUND: WGErrorCode = {
    code: WG_ERORCODE_PREFIX+"104",
    description: "Gaming Lounge not found."
},
WG_ERROR_GL_UPDATE: WGErrorCode = {
    code: WG_ERORCODE_PREFIX+"105",
    description: "Gaming Lounge can not be updated."
},WG_ERROR_GL_TPYE_UPDATE: WGErrorCode = {
    code: WG_ERORCODE_PREFIX+"106",
    description: "Gaming Lounge type is not allowed to be changed."
},
WG_ERROR_GL_GAME_TPYE_UPDATE: WGErrorCode = {
    code: WG_ERORCODE_PREFIX+"107",
    description: "Gaming Lounge game type is not allowed to be changed."
};