
export const addMail = (...args) =>{
    console.log(args[0], args[1], args[2])
    return {
        type:'SENDING',
        sender: args[0],
        text: args[1],
        id: args[2]
    }
}