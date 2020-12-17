import * as types from "./types"



export const loginRequest = (email: string): types.LoginRequestAction =>
    ({ type: types.LOGIN_REQUEST, email })

export const loginSuccess = (token: string): types.LoginSuccsesAction =>
    ({ type: types.LOGIN_SUCCESS, token })

export const loginFailure = (data: any): types.LoginFailureAction =>
    ({
        type: types.LOGIN_FAILURE,
        error_title: data.title,
        invalidParams: data.invalidParams
    })

export const registerRequest = (email: string): types.RegisterRequestAction =>
    ({ type: types.REGISTER_REQUEST, email })

export const registerSuccess = (token: string): types.RegisterSuccsesAction =>
    ({ type: types.REGISTER_SUCCESS, token })

export const registerFailure = (data: any): types.RegisterFailureAction =>
    ({
        type: types.REGISTER_FAILURE,
        error_title: data.title,
        invalidParams: data.invalidParams
    })

export const logout = (): types.LogoutAction =>
    ({ type: types.LOGOUT_SESSION })
