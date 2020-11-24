export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";


export const LOGOUT_SESSION = "ADD_DEADLINE";

export const loginRequest = (email: string) => ({ type: LOGIN_REQUEST, email })
export const loginSuccess = (token: string) => ({ type: LOGIN_SUCCESS, token })
export const loginFailure = (error: string) => ({ type: LOGIN_FAILURE, error })

export const registerRequest = (email: string) => ({ type: REGISTER_REQUEST, email })
export const registerSuccess = (token: string) => ({ type: REGISTER_SUCCESS, token })
export const registerFailure = (error: string) => ({ type: REGISTER_FAILURE, error })

export const logout = () => ({ type: LOGOUT_SESSION })
