import mailList from './mailReducer'
import profileReducer from './profileReducer'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const allReducers = combineReducers({
    mailList,
    profileReducer,
    form: formReducer,
})

export default allReducers;