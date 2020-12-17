import { ThunkDisp, dispatch } from './../store/index';
import { push } from 'connected-react-router';
import { setApiToken } from "../api"
import api from '../store/api_state/actions'


export const login = (email: string, password: string) => (dispatch: ThunkDisp) => {
  dispatch(api.post("Account/login", {email, password}))
    .then(res => {
      dispatch({type: 'LOGINED'})
      dispatch(push('/deadlines'))
    })
}

export const register = (email: string, password: string) => (dispatch: ThunkDisp) => {
  console.log("PRE", email, password);
  
  dispatch(api.post("Account/register", {email, password}))
    .then((res)=> {
      const token = res.data.token
      setApiToken(token)
      dispatch(push('/deadlines'))
    })
}

export const logout = () => (dispatch: ThunkDisp) => {

}