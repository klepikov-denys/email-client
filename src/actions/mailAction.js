
export const addMail = (...args) =>{
    console.log(args[0], args[1], args[2], args[3])
    return {
        type:'SENDING',
        recipient: args[0],
        text: args[1],
        id: args[2],
        subject: args[3]
    }
}