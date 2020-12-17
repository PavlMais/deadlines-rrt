import { AxiosResponse } from "axios"
import { push } from "connected-react-router"
import api, { setApiToken } from "../../api"
import { dispatch } from "../../store"

export const api_register = (email: string, password: string) => {
    var promise = api.post('Account/register', {email, password})

    const onThen = (res: AxiosResponse) => {
        const token = res.data.token
        setApiToken(token)
        dispatch(push('/deadlines'))
    }
    const onCatch = (err: any) => {
        if (!err.response) {
            return { title: "No internet connection or server die" }
        } 

        return err.response.data
    }
    return { promise, onThen, onCatch}
}