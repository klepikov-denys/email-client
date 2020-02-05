import React from 'react' 
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import './message.css'



export default function Message(){
    const allMails = useSelector(state => state.mailList.allMails)
    let { id } = useParams();
    const mail = allMails[id]
    
    
    return(
        <div className={'wrapper'}>
            <p className ={'textFields'}>
                <strong>To: </strong>
                { mail.recipient } 
            </p>
            
            <p className ={'textFields'}>
                <strong>From: </strong>
                { mail.sender } 
            </p>

            <p className ={'textFields lastField'}>
                <strong>Subject: </strong>
                {mail.subject}
            </p>

            <p className ={'textFields message'}>{mail.text}</p>
            
        </div>
    )
}