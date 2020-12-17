export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGOUT_SESSION = "LOGOUT_SESSION";


interface InvalidParam{
    name: "email" | "password",
    reason: string
}


export interface SessionState {
    loading: boolean,
    isLogined: boolean,
    token: string,
    email: string,
    error_title: string
    invalidParams: Array<InvalidParam>
}

export interface LoginRequestAction {
    type: typeof LOGIN_REQUEST,
    email: string
}
export interface LoginSuccsesAction {
    type: typeof LOGIN_SUCCESS,
    token: string
}
export interface LoginFailureAction {
    type: typeof LOGIN_FAILURE,
    error_title: string,
    invalidParams: Array<InvalidParam>
}

export interface RegisterRequestAction {
    type: typeof REGISTER_REQUEST,
    email: string
}
export interface RegisterSuccsesAction {
    type: typeof REGISTER_SUCCESS,
    token: string
}
export interface RegisterFailureAction {
    type: typeof REGISTER_FAILURE,
    error_title: string,
    invalidParams: Array<InvalidParam>
}

export interface LogoutAction {
    type: typeof LOGOUT_SESSION,
}

export type SessionActions = LoginRequestAction | LoginSuccsesAction
    | LoginFailureAction | RegisterRequestAction | RegisterSuccsesAction | RegisterFailureAction | LogoutAction
