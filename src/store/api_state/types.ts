export const REQUEST = 'REQUEST'
export const FALIURE = 'FALIURE'
export const SUCCESS = 'SUCCESS'
export const COMPLETE = 'COMPLETE'


export interface MRequest {
    id: number
    url: string
    date: Date
}

export interface InvalidParam {
    field: string
    reason: string
}

export interface RequestError {
    url: string
    title: string,
    invalidParams: InvalidParam[]
}

export interface SResponse{

}




export interface ApiState {
    isLoading: boolean
    errors: RequestError[]
}



export interface RequestAction {
    type: typeof REQUEST,
    url: string
}

export interface SuccessAction {
    type: typeof SUCCESS,
}
export interface FailureAction{
    type: typeof FALIURE,
    error: RequestError
}
export interface CompleteAction{
    type: typeof COMPLETE,
}


export type ApiActions = RequestAction | FailureAction | SuccessAction | CompleteAction
