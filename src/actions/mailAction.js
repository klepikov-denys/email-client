
export const addMail = (recipient, text, id, subject) =>{
    return {
        type:'SENDING',
        recipient,
        text,
        id,
        subject
    }
}