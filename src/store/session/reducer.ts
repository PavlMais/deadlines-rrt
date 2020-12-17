import * as types from './types';



const token = localStorage.getItem('jwt-token')

const initialState: types.SessionState = { 
    loading: false,
    isLogined: token ? true : false,
    token: token || '',
    email: '',
    error_title: '',
    invalidParams: []
};

const reducer = (state = initialState, action: types.SessionActions): types.SessionState  => {
    
switch (action.type) {
    case types.LOGIN_REQUEST:
        return {
            isLogined: false,
            token: '',
            email: action.email,
            loading: true,
            error_title: '',
            invalidParams: []
        }

    case types.LOGIN_SUCCESS:
        return { 
            isLogined: true,
            token: action.token,
            email: state.email,
            loading: false,
            error_title: '',
            invalidParams: []

        };
    case types.LOGIN_FAILURE:
        return { 
            isLogined: true,
            token: '',
            email: '',
            loading: false,
            error_title: action.error_title,
            invalidParams: action.invalidParams
        };

    case types.REGISTER_REQUEST:
        return {
            isLogined: false,
            token: '',
            email: action.email,
            loading: true,
            error_title: '',
            invalidParams: []

        }

    case types.REGISTER_SUCCESS:
        return { 
            isLogined: true,
            token: action.token,
            email: state.email,
            loading: false,
            error_title: '',
            invalidParams: []

        };
    case types.REGISTER_FAILURE:
        return { 
            isLogined: false,
            token: '',
            email: '',
            loading: false,
            error_title: action.error_title,
            invalidParams: action.invalidParams
        };

    case types.LOGOUT_SESSION:
        return { 
            isLogined: false,
            token: '',
            email: '',
            loading: false,
            error_title: '',
            invalidParams: []
        };
}


       
    return state;
}


export default reducer;











