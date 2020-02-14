import { changeSpinnerState } from '../actions/spinnerAction'
export function refreshMails (){
    return (dispatch) =>{
        dispatch(changeSpinnerState())
        fetch('https://my-json-server.typicode.com/klepikov-denys/emails/mails')
            .then((response) => response.json())
            .then((mails) => {
                dispatch(changeSpinnerState())
                dispatch({
                type: 'REFRESH_MAILS',
                mails: mails
                })}, 
            )
    }
}
