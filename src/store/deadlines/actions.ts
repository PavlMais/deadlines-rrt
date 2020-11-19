import { Dispatch } from 'react';
export const ADD_DEADLINE = 'ADD_DEADLINE'
export const DELETE_DEADLINE = 'DELETE_DEADLINE'



// export const addDeadline = (title: string): AddDeadlineAction => ({
//     type: ADD_DEADLINE,
//     title: title
// })


// export const addDeadline = (title: string) => (dispatch: any) => ({
//     type: ADD_DEADLINE,
//     title: title
// })
export const addDeadline = (title: string) => (dispatch: Dispatch<{}>) => {
    
    dispatch(request(title))

    //return { type: ADD_DEADLINE, title: title }

}


const request = (title: string) => ({ type: ADD_DEADLINE, title: title })


// function login(username: any) {
//     return (dispatch: any) => {
//         dispatch(request({ username }));

//         userService.login(username, password)
//             .then(
//                 user => { 
//                     dispatch(success(user));
//                     history.push('/');
//                 },
//                 error => {
//                     dispatch(failure(error));
//                     dispatch(alertActions.error(error));
//                 }
//             );
//     };

//     function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
//     function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
//     function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
// }