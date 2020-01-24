import React from 'react' 
import { useSelector } from 'react-redux'
import './message.css'
import { oldMails } from '../mails/oldMails'



export default function Message({ match }){
    const allMails = oldMails.concat(useSelector(state => state.newMails))

    const mail = allMails[match.params.id]
    
    
    return(
        <div className={'wrapper'}>
            <p className ={'textFields'}>To: {mail.recipient === 'den@gmail.com' ? 'You' : mail.recipient } </p>
            <p className ={'textFields'}>From: {mail.sender === 'den@gmail.com' ? 'You' : mail.sender } </p>
            <p className ={'textFields'}>{mail.text}</p>
            
        </div>
    )
}