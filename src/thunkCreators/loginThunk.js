import {loginAction} from '../actions/login'
import {changeLoaderStatus} from '../actions/loaderAction'

export function login (user, history){
    return (dispatch) =>{
        dispatch(changeLoaderStatus())
        setTimeout(()=>{
            dispatch(loginAction(user))
            history.push('/')
            dispatch(changeLoaderStatus())
        }, 5000)
    }
}