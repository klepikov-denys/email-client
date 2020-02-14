
let initialState = {
    allMails: [],
    allMailsChecked:false,
}


const mailList = (state = initialState, action) => {
    switch (action.type) {
       case 'SENDING':
          return Object.assign({}, state,{ 
            allMails: [
                ...state.allMails,  
                {
                sender: action.sender,
                recipient: action.newMail.email,
                subject: action.newMail.subject,
                text: action.newMail.text,
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
                    if (action.filterType === obj.type && !state.allMailsChecked){
                        obj.checked = true
                    } else{
                        obj.checked = false
                    }
                    return obj
                }),
                allMailsChecked: !state.allMailsChecked,
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
        case 'REFRESH_MAILS':
            return Object.assign({}, state, {
                allMails: action.mails
            })
        case 'CHANGE_CHECKED_STATE':
            return Object.assign({}, state,{
                allMailsChecked: false,  
            })
        default:
            return state;
    }
}

export default mailList;