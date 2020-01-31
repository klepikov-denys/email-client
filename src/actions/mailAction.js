
export const addMail = (recipient, text, id, subject) =>({
        type:'SENDING',
        recipient,
        text,
        id,
        subject
    })