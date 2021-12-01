import axios from 'axios'
import { EVENT_ERROR, GET_EVENT } from '../types'
import { apiEnd, apiStart } from './auth'

export const GetEvent = data => {
    console.log(data)
    return {
        type: GET_EVENT,
        payload: data,
    }
}

export const EventError = data => {
    return {
        type: EVENT_ERROR,
        payload: data,
    }
}
export const getEvents = () => dispatch => {
    dispatch(apiStart())

    axios
        .get('https://inspigo-b2b-api.herokuapp.com/tiket/schedules')
        .then(({ data }) => {
            dispatch(GetEvent(data))
        })
        .catch(error => {
            dispatch(EventError(error))
        })
        .then(() => {
            dispatch(apiEnd())
        })
}
