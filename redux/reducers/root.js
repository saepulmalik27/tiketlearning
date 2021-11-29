import { combineReducers } from 'redux'
import AuthData from './auth'

const rootReducer = combineReducers({
    authData: AuthData,
})

export default rootReducer
