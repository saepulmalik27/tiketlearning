import { saveDataToLocal } from '@/utils/function'
import axios from 'axios'

import {
    AUTH_END,
    AUTH_ERROR,
    AUTH_START,
    AUTH_SUCCESS,
    UPDATE_USER_SESSION,
} from '../types'

export const authLogin = data => dispatch => {
    if (data) {
        dispatch({
            type: AUTH_START,
            payload: true,
        })
    }

    axios
        .post('https://inspigo-b2b-api.herokuapp.com/login', data)
        .then(({ data }) => {
            dispatch({
                type: AUTH_SUCCESS,
                payload: data,
            })
            saveDataToLocal(data)
        })
        .catch(error => {
            dispatch({
                type: AUTH_ERROR,
                payload: error,
            })
        })
        .then(() => {
            dispatch({
                type: AUTH_END,
                payload: false,
            })
        })
}

export const updateUserSession = userSession => {
    // console.log(userSession);
    return dispatch => {
        //        console.log("hallo");
        //    console.log(dispatch);
        // if (userSession) {
        dispatch({
            type: UPDATE_USER_SESSION,
            payload: userSession,
        })
        // }
    }
}

// export const updateUserSession = (userSession) => {
// console.log("hallo action");
//     return {
//         type : UPDATE_USER_SESSION,
//         payload : userSession,
//     }
// }
