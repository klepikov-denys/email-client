import { addMail } from '../actions/mailAction.js'
import { changeLoaderStatus } from '../actions/loaderAction.js'


export function sendMail (newMail, id, sender, history){
    return (dispatch) =>{
        dispatch(changeLoaderStatus())
        setTimeout(()=>{
            dispatch(addMail(newMail, id, sender))
            history.push('/')
            dispatch(changeLoaderStatus())
        }, 5000)
    }
}

