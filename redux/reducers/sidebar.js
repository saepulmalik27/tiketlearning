const { ACTIVE_SIDEBAR } = require('../types')

const initialState = false

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE_SIDEBAR:
            return action.payload
        default:
            return state
    }
}

export default sidebarReducer
