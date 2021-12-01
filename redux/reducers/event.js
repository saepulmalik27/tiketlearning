const { GET_EVENT, EVENT_ERROR } = require('../types')

const initialState = {
    type: '',
    schedules: [],
}

const EventReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENT:
            return {
                ...state,
                type: action.payload.type,
                schedules: action.payload.schedules,
            }
        case EVENT_ERROR:
            return { ...state, type: 'error' }

        default:
            return state
    }
}
export default EventReducer
