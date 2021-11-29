import axios from 'axios'
import { AUTH_END, AUTH_ERROR, AUTH_START, AUTH_SUCCESS } from '../types'

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
        })
        .catch(error => {
            console.log(error, error.message)
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
