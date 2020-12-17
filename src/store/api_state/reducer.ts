import { act } from 'react-dom/test-utils';
import * as types from './types';



const token = localStorage.getItem('jwt-token')

const initialState: types.ApiState = { 
    isLoading: false,
    errors: []
};

const reducer = (state = initialState, action: types.ApiActions): types.ApiState  => {
    
switch (action.type) {
    case types.REQUEST:
        return {...state, isLoading: true }
        
    case types.SUCCESS:
        return state 
        
    case types.FALIURE:
        return {...state, errors: [...state.errors, action.error]}

    case types.COMPLETE:
        return {...state, isLoading: false}
    
    default:
        return state
    }
}


export default reducer;











