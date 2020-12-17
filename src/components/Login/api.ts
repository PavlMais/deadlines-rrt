import { AxiosResponse } from "axios";
import { push } from "connected-react-router";
import api, { setApiToken } from "../../api";
import { dispatch } from "../../store";




export const login = (email: string, password: string) => {
    var promise = api.post('Account/login', { email, password })

    const onThen = (res: AxiosResponse) => {
        const token = res.data.token
        setApiToken(token)
        dispatch({ type: 'LOGINED' })
        dispatch(push('/deadlines'))
    }
    const onCatch = (err: any) => {
        if (!err.response) {
            return { title: "No internet connection or server die" }
        } 

        return err.response.data
    }

    return { promise, onThen, onCatch }
}