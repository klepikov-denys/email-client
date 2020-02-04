
export const addMail = (recipient, text, id, subject, sender) =>({
        type:'SENDING',
        recipient,
        text,
        id,
        subject,
        sender,
    })