import { deleteDataAuthLocal, saveAuthToLocal } from '@/utils/function'
import axios from 'axios'

import {
    AUTH_ERROR,
    API_START,
    API_END,
    AUTH_SUCCESS,
    UPDATE_USER_SESSION,
} from '../types'

export const apiStart = () => ({
    type: API_START,
    payload: true,
})

export const apiEnd = () => ({
    type: API_END,
    payload: false,
})

const authSuccess = data => ({
    type: AUTH_SUCCESS,
    payload: data,
})

const authError = data => ({
    type: AUTH_ERROR,
    payload: data,
})

export const authLogin = data => dispatch => {
    if (data) {
        dispatch(apiStart())
    }

    axios
        .post('https://inspigo-b2b-api.herokuapp.com/login', data)
        .then(({ data }) => {
            dispatch(authSuccess(data))
            saveAuthToLocal(data)
        })
        .catch(error => {
            dispatch(authError(error))
        })
        .then(() => {
            dispatch(apiEnd())
        })
}

export const updateUserSession = userSession => {
    return dispatch => {
        dispatch({
            type: UPDATE_USER_SESSION,
            payload: userSession,
        })
    }
}

export const LogoutAction = () => dispatch => {
    const refreshToken = localStorage.getItem('refreshToken')

    if (refreshToken) {
        console.log('hallo')
        console.log(refreshToken)
        dispatch(apiStart())
        axios
            .post('https://inspigo-b2b-api.herokuapp.com/logout', {
                token: refreshToken,
            })
            .then(() => {
                const data = {
                    name: '',
                    email: '',
                    token: {},
                    error_message: '',
                }
                dispatch(authSuccess(data))
                deleteDataAuthLocal()
            })
            .catch(error => {
                dispatch(authError(error))
            })
            .then(() => {
                dispatch(apiEnd())
            })
    }
}
