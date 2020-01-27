import { oldMails } from '../mails/oldMails'



let initialState = {
    newMails: [],
    allMails: oldMails,
}


const mailList = (state = initialState, action) => {
    switch (action.type) {
       case 'SENDING':
          return Object.assign({}, state,{ 
            newMails: [
                ...state.newMails,  
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
        case 'INBOX':
            return Object.assign({}, state, {
                allMails: oldMails.concat(state.newMails).filter((obj) => obj.type === 'INBOX')
            })  
        case 'IMPORTANT':
            return Object.assign({}, state, {
                allMails: oldMails.concat(state.newMails).filter((obj) => obj.type === 'IMPORTANT')
            }) 
        case 'SENT':
            return Object.assign({}, state, {
                allMails: oldMails.concat(state.newMails).filter((obj) => obj.type === 'SENT')
            }) 
        case 'TRASH':
            return Object.assign({}, state, {
                allMails: oldMails.concat(state.newMails).filter((obj) => obj.type === 'TRASH')
            })
        case 'CHECK_MAIL':
            return Object.assign({}, state, {
                allMails: state.allMails.map((obj) => { 
                    if(obj.id === action.idNum){
                        obj.checked = !obj.checked
                    }
                    return obj
                })
            })
        case 'CHECK_ALL_MAILS':
            return Object.assign({}, state, {
                allMails: state.allMails.map((obj) => { 
                    obj.checked = true
                    return obj
                })
            })

        default:
            return state;
    }
}

export default mailList;