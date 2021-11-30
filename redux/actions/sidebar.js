import { ACTIVE_SIDEBAR } from '../types'

export const toggleSidebar = data => {
    return dispatch => {
        dispatch({
            type: ACTIVE_SIDEBAR,
            payload: data,
        })
    }
}
