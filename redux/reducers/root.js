import { combineReducers } from 'redux'
import AuthData from './auth'
import EventReducer from './event'
import LoadingReducer from './loading'
import sidebarReducer from './sidebar'

const rootReducer = combineReducers({
    authData: AuthData,
    loading: LoadingReducer,
    activeSidebar: sidebarReducer,
    eventData: EventReducer,
})

export default rootReducer
