import React from 'react' 
import { useSelector } from 'react-redux'
import './message.css'



export default function Message({ match }){
    const allMails = useSelector(state => state.allMails)
    const mail = allMails[match.params.id]
    
    
    return(
        <div className={'wrapper'}>
            <p className ={'textFields'}>
                <strong>To: </strong>
                {mail.recipient === 'den@gmail.com' ? 'You' : mail.recipient } 
            </p>
            
            <p className ={'textFields'}>
                <strong>From: </strong>
                {mail.sender === 'den@gmail.com' ? 'You' : mail.sender } 
            </p>

            <p className ={'textFields lastField'}>
                <strong>Subject: </strong>
                {mail.subject}
            </p>

            <p className ={'textFields message'}>{mail.text}</p>
            
        </div>
    )
}