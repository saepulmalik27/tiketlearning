const { AUTH_SUCCESS, AUTH_START, AUTH_ERROR, AUTH_END } = require('../types')

const initialState = {
    name: '',
    email: '',
    token: {},
    loading: false,
    error_message: '',
}

const AuthData = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START:
            return (state = { ...initialState, loading: action.payload })
        case AUTH_SUCCESS:
            return (state = {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                token: action.payload.token,
                error_message: '',
            })
        case AUTH_ERROR:
            console.log(action.payload)
            return (state = {
                ...state,
                name: '',
                email: '',
                token: {},
                error_message: action.payload,
            })
        case AUTH_END:
            return (state = { ...state, loading: action.payload })

        default:
            return state
    }
}

export default AuthData
