
interface Session {
    id: number,
    title: string
}

type SessionState = {
    loading: boolean,
    isLogined: boolean,
    token: string,
    email: string
    loginError: string
}

interface LoginRequestAction {
    type: ADD_DEADLINE,
    email: string
}
interface LoginSuccsesAction {
    type: ADD_DEADLINE,
    token: string
}
interface LoginFailureAction {
    type: ADD_DEADLINE,
    error: string
}
interface LogoutAction{
    type: DELETE_DEADLINE,
}

type SessionActions = LoginRequestAction & LoginSuccsesAction & LoginFailureAction & LogoutAction
