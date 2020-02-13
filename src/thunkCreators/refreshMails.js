
export function refreshMails (){
    return (dispatch) =>{
        fetch('https://my-json-server.typicode.com/klepikov-denys/emails/mails')
            .then((response) => response.json())
            .then((mails) => dispatch({
                type: 'REFRESH_MAILS',
                mails: mails
                })
            )
    }
}
