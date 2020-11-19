import { AnyAction } from 'redux';
import { Dispatch } from "react";

import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../store/session/actions";
import { setApiToken } from "../api";
import api from "../api";

export default class Session {

  static login = (email: string, password: string) => (
    dispatch: Dispatch<AnyAction>
  ) => {
    console.log('Login request: ', email, password)
    dispatch(loginRequest(email));

    api
      .post("login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;
        setApiToken(token);
        dispatch(loginSuccess(token));
      })
      .catch((error) => {
        dispatch(loginFailure(error.response.data.error));
      });
  };
  

}
