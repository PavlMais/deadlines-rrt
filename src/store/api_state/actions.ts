import { dispatch } from './../index';
import { AxiosResponse } from 'axios';
import * as types from "./types"
import api from '../../api'
import { ThunkDispatch } from 'redux-thunk';

export const apiRequest = (url: string): types.RequestAction =>
    ({ type: types.REQUEST, url })

export const apiSuccess = (): types.SuccessAction =>
    ({ type: types.SUCCESS })

export const apiFailure = (error: types.RequestError): types.FailureAction =>
    ({ type: types.FALIURE, error })

export const apiComplete = (): types.CompleteAction =>
    ({ type: types.COMPLETE })    



const post = <R = any>(url: string, data: any) => (dispatch: ThunkDispatch<any,any,any>): Promise<AxiosResponse<R>> => {
    dispatch(apiRequest(url));
    
    console.log("POST ", url, data);
    
    var prom = api.post<R>(url, data)
    
    prom.then((res) => {
        dispatch(apiSuccess())
    }).catch((error) => {        
        console.log(error.toJSON());

        if (error.response) {
            console.log('Response');
            console.log(error.response);
            dispatch(apiFailure({url, title: error.response.data.title, invalidParams: error.response.data.invalidParams}))

        } else if (error.request) { 
            console.log('Request');
            console.log(error.request);
            dispatch(apiFailure({url, title: "No internet connection", invalidParams: []}))
        } else {
            console.log('Error', error.message);
        }

    }).finally(()=>{
        dispatch(apiComplete())
    })
    
    return prom 
}


export default {
    post
};