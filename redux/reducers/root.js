import { combineReducers } from 'redux'
import AuthData from './auth'
import LoadingReducer from './loading'
import sidebarReducer from './sidebar'

const rootReducer = combineReducers({
    authData: AuthData,
    loading: LoadingReducer,
    activeSidebar: sidebarReducer,
})

export default rootReducer
