import * as actionTypes from './actions'


const token = localStorage.getItem('jwt-token')

console.log('Restored token: ', token);


const initialState: SessionState = { 
    loading: false,
    isLogined: token ? true : false,
    token: token || '',
    email: '',
    loginError: ''
};




const reducer = (state = initialState, action: SessionActions): SessionState  => {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return {
                isLogined: false,
                token: '',
                email: action.email,
                loading: true,
                loginError: ''

            }
    
        case actionTypes.LOGIN_SUCCESS:
            return { 
                isLogined: true,
                token: action.token,
                email: state.email,
                loading: false,
                loginError: ''

            };
        case actionTypes.LOGIN_FAILURE:
            return { 
                isLogined: true,
                token: '',
                email: '',
                loading: false,
                loginError: action.error
            };

        case actionTypes.REGISTER_REQUEST:
            return {
                isLogined: false,
                token: '',
                email: action.email,
                loading: true,
                loginError: ''

            }
    
        case actionTypes.REGISTER_SUCCESS:
            return { 
                isLogined: true,
                token: action.token,
                email: state.email,
                loading: false,
                loginError: ''

            };
        case actionTypes.REGISTER_FAILURE:
            return { 
                isLogined: false,
                token: '',
                email: '',
                loading: false,
                loginError: action.error
            };
 
        case actionTypes.LOGOUT_SESSION:
            return { 
                isLogined: false,
                token: '',
                email: '',
                loading: false,
                loginError: ''
            };
    }
       
    return state;
}


export default reducer;