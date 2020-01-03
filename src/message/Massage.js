import React from 'react' 
import mails from '../mails/mails'
import './massage.css'




export default function Message({ match }){

    const mail = mails[match.params.id]

    let [namePreposition, emailPreposition, email, name]=['From: ', 'To: ', 'den@gmail.com', mail.sender]
   

    if(mail.type === 'SENT'){
        [namePreposition, emailPreposition, email, name] = [emailPreposition, namePreposition, name, email]
    }
    
    
    return(
        <div className={'wrapper'}>
            <p className ={'textFields'}>{namePreposition}{name}</p>
            <p className ={'textFields'}>{emailPreposition}{email}</p>
            <p className ={'textFields'}>{mail.text}</p>
            
        </div>
    )
}