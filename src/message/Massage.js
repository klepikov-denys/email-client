import React from 'react' 
import { useSelector } from 'react-redux'
import './massage.css'
import { oldMails } from '../mails/oldMails'



export default function Message({ match }){
    const allMails = oldMails.concat(useSelector(state => state.newMails))

    const mail = allMails[match.params.id]

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