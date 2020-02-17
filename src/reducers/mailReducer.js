
let initialState = {
    allMails: [],
    allMailsChecked:false,
}


const mailList = (state = initialState, action) => {
    switch (action.type) {
       case 'SENDING':
          return { ...state, 
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
            ]};
        case 'CHECK_MAIL':
            return { ...state,
                allMails: state.allMails.concat().map((obj) => { 
                    if(obj.id === action.id){
                        obj.checked = !obj.checked
                    }
                    return obj
                })
            }
        case 'CHECK_ALL_MAILS':
            return { ...state,
                allMails: state.allMails.concat().map((obj) => { 
                    if (action.filterType === obj.type && !state.allMailsChecked){
                        obj.checked = true
                    } else{
                        obj.checked = false
                    }
                    return obj
                }),
                allMailsChecked: !state.allMailsChecked,
            }
        case 'DELETE_MAILS':
            return { ...state,
                allMails: state.allMails.map((obj) => { 
                    if (obj.checked){
                        obj.type = 'TRASH'
                        obj.checked = !obj.checked
                    }
                    return obj
                })
            }
            case 'LOGIN':
            return { ...state,
                allMails: []
            }
        case 'REFRESH_MAILS':
            return { ...state,
                allMails: action.mails
            }
        case 'CHANGE_CHECKED_STATE':
            return { ...state,
                allMailsChecked: false,  
            }
        default:
            return state;
    }
}

export default mailList;