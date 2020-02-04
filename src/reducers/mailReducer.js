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
                sender: action.sender,
                recipient: action.recipient,
                subject: action.subject,
                text: action.text,
                type: 'SENT',
                id : action.id,
                checked: false
                }
            ]});
        case 'CHECK_MAIL':
            return Object.assign({}, state, {
                allMails: state.allMails.concat().map((obj) => { 
                    if(obj.id === action.id){
                        obj.checked = !obj.checked
                    }
                    return obj
                })
            })
        case 'CHECK_ALL_MAILS':
            return Object.assign({}, state, {
                allMails: state.allMails.concat().map((obj) => { 
                    if (action.filterType === obj.type){
                        obj.checked = !obj.checked
                    }
                    return obj
                })
            })
        case 'DELETE_MAILS':
            return Object.assign({}, state, {
                allMails: state.allMails.map((obj) => { 
                    if (obj.checked){
                        obj.type = 'TRASH'
                        obj.checked = !obj.checked
                    }
                    return obj
                })
            })
            case 'LOGIN':
            return Object.assign({}, state, {
                allMails: []
            })
        default:
            return state;
    }
}

export default mailList;