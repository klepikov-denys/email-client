
let initialState = {

    mails:[{"sender":"Jack Sparrow",
        "text":"Hello Dan! I'm writing you just to make sure that you remember about my Bday.",
        "type":"INBOX",
        "id":"0"
        },

        {"sender":"Jack Sparrow",
        "text":"Hello Dan! I'm writing you just to make sure that you remember about my Bday.",
        "type":"IMPORTANT",
        "id":"1"
        },

        {"sender":"Dan Sparrow",
        "text":"Hello Dan! I'm writing you just to make sure that you remember about my Bday.",
        "type":"SENT",
        "id":"2"
        },

        {"sender":"Nick Sparrow",
        "text":"Hello Dan! I'm writing you just to make sure that you remember about my Bday.",
        "type":"TRASH",
        "id":"3"
        },

        {"sender":"Sunny Sparrow",
        "text":"Hello Dan! I'm writing you just to make sure that you remember about my Bday.",
        "type":"IMPORTANT",
        "id":"4"
        }
]}


const mailList = (state = initialState, action) => {
    switch (action.type) {
       case 'SENDING':
          return Object.assign({}, state,{ 
            mails:[
                ...state.mails,  
                {
                sender: action.sender,
                text: action.text,
                type: 'SENT',
                id : action.id
                }
            ]});
        case 'INBOX':
            return Object.assign({}, state, {
                mails: state.mails.filter((obj) => obj.type === 'INBOX')
            })  
        case 'IMPORTANT':
            return Object.assign({}, state, {
                mails: state.mails.filter((obj) => obj.type === 'IMPORTANT')
            }) 
        case 'SENT':
            return Object.assign({}, state, {
                mails: state.mails.filter((obj) => obj.type === 'SENT')
            }) 
        case 'TRASH':
            return Object.assign({}, state, {
                mails: state.mails.filter((obj) => obj.type === 'TRASH')
            })    
        default:
            return state;
    }
}

export default mailList;