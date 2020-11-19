import { ADD_DEADLINE, DELETE_DEADLINE } from './actions';


const initialState: DeadlineState = {
    deadlines:[
        {
            id: 1,
            title: 'Deadline 1'
        }
    ]
}

const reducer = (state = initialState, action: DeadlineActions): DeadlineState  => {
    switch (action.type) {
        case ADD_DEADLINE:
            return {
                ...state,
                deadlines: state.deadlines.concat({
                    id: 3,
                    title: action.title
                })
            }
            
        case DELETE_DEADLINE:
            return state;
        }
    return state;
}


export default reducer;