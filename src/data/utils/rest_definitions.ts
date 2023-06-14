
const getBaseUrlByEnv = () => (process.env.NEXT_PUBLIC_DEV_ENV == "local" ? process.env.NEXT_PUBLIC_BASE_API_URL : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`);

export const APP_CFG_REST_URLS = {
  BASE_URL: getBaseUrlByEnv(),
}


export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
  };


export const API_STATUS = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,    
    RSC_CREATE: 201,
    UNAUTHORIZED: 401,
    PROHIBITED: 402,
}
export const RESPONSE_ERRORS = {
    BAD_REQUEST: "Bad Request",
    SERVER_ERROR: "Server Error",    
}

export const API_VERBS  = {
    GET: "GET", 
    POST: "POST", 
    PUT: "PUT", 
    DELETE: "DELETE"
}

export interface ResponseApiRest {
    data: any,
    status: any
    error: any
}