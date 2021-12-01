const { AUTH_SUCCESS, AUTH_ERROR, UPDATE_USER_SESSION } = require('../types')

const initialState = {
    name: '',
    email: '',
    token: {},
    error_message: '',
    status: '',
}

const AuthData = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case AUTH_SUCCESS:
            return (state = {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                token: action.payload.token,
                status: action.payload.status,
                error_message: '',
            })
        case AUTH_ERROR:
            return (state = {
                ...state,
                name: '',
                email: '',
                token: {},
                error_message: action.payload,
            })
        case UPDATE_USER_SESSION:
            return (state = { ...state, ...action.payload })

        default:
            return state
    }
}

export default AuthData
