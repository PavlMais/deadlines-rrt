import axios from "axios";
export const LOGIN_SESSION = "ADD_DEADLINE";
export const LOGOUT_SESSION = "ADD_DEADLINE";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginRequest = (email: string) => ({ type: LOGIN_REQUEST, email })
export const loginSuccess = (token: string) => ({ type: LOGIN_SUCCESS, token })
export const loginFailure = (error: string) => ({ type: LOGIN_FAILURE, error })
