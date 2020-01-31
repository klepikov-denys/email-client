import mailList from './mailReducer'
import profileReducer from './profileReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    mailList,
    profileReducer,
})

export default allReducers;