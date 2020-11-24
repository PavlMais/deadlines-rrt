import { AnyAction } from 'redux';
import { Dispatch } from "react";
import { push } from 'connected-react-router'
import * as action from "../store/session/actions";
import { setApiToken } from "../api";
import api from "../api";

export default class Session {

  static login = (email: string, password: string) => (
    dispatch: Dispatch<AnyAction>
  ) => {
    console.log('Login request: ', email, password)
    dispatch(action.loginRequest(email));

    api
      .post("login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;
        setApiToken(token);
        dispatch(action.loginSuccess(token));
        dispatch(push('/deadlines'))
      })
      .catch((error) => {
        console.log(error);
        
        dispatch(action.loginFailure(error.response.data.error));
      });
  };

  static register = (email: string, password: string) => (
    dispatch: Dispatch<AnyAction>
   ) => {
    dispatch(action.registerRequest(email))

    api.post('register',{email, password})
       .then((res) => {
         const token = res.data.token
         setApiToken(token)
         dispatch(action.registerSuccess(token))
         dispatch(push('/deadlines'))
        
       })
       .catch((err) => {
         dispatch(action.registerFailure(err.response.data.error))
       })
  }

  static logout = () => (dispatch: Dispatch<AnyAction>) => {
    api.post('logout')
       .then((res) => {
        setApiToken('')
        dispatch(action.logout())
        dispatch(push('/'))
       
      })
      .catch((err) => {
        dispatch(action.registerFailure(err.response.data.error))
      })
  }
  

}
