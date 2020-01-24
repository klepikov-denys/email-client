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
                id : action.id
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
        default:
            return state;
    }
}

export default mailList;