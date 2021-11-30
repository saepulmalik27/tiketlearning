const { API_START, API_END } = require('../types')

const initialState = {
    loading: false,
}

const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_START:
            return { ...state, loading: action.payload }
        case API_END:
            return { ...state, loading: action.payload }
        default:
            return state
    }
}

export default LoadingReducer
