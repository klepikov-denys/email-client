import mailList from './mailReducer'
import profileReducer from './profileReducer'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import loaders from './loadingReducer'

const allReducers = combineReducers({
    mailList,
    loaders,
    profileReducer,
    form: formReducer,
})

export default allReducers;