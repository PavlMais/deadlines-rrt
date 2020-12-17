import { act } from 'react-dom/test-utils';
import * as types from  './types';


const initialState: types.DeadlineState = {
    isLoading: false,
    deadlines:[
        {
            id: 1,
            title: 'Deadline 1'
        }
    ]
}

const reducer = (state = initialState, action: types.DeadlineActions): types.DeadlineState  => {
    // switch (action.type) {
    //     case types.ADD_DEADLINE:
    //         return {
    //             deadlines: state.deadlines.concat({
    //                 id: 3,
    //                 title: action.title
    //             })
    //         }
    //     case types.LOAD_DEADLINES:
    //         return {
    //             deadlines: action.deadlines
    //         }
            
    //     case types.DELETE_DEADLINE:
    //         return state;
    //     }
    return state;
}


export default reducer;