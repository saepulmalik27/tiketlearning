import { combineReducers } from 'redux'
import AuthData from './auth'
import LoadingReducer from './loading'

const rootReducer = combineReducers({
    authData: AuthData,
    loading: LoadingReducer,
})

export default rootReducer
