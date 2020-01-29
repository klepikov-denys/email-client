import { oldMails } from '../mails/oldMails'



let initialState = {
    allMails: oldMails,
}


const mailList = (state = initialState, action) => {
    switch (action.type) {
       case 'SENDING':
          return Object.assign({}, state,{ 
            
            allMails: [
                ...state.allMails,  
                {
                sender: 'den@gmail.com',
                recipient: action.recipient,
                subject: action.subject,
                text: action.text,
                type: 'SENT',
                id : action.id,
                checked: false
                }
            ]
        });

        case 'CHECK_MAIL':
            return Object.assign({}, state, {
                allMails: state.allMails.concat().map((obj) => { 
                    if(obj.id === action.idNum){
                        obj.checked = !obj.checked
                    }
                    return obj
                })
            })
            
        case 'CHECK_ALL_MAILS':
            return Object.assign({}, state, {
                allMails: state.allMails.concat().map((obj) => { 
                    obj.checked = !obj.checked
                    return obj
                })
            })

        default:
            return state;
    }
}

export default mailList;