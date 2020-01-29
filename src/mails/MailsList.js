import React from 'react'
import Mail from './Mail'


function MailsList (props) {

     let filteredMails = props.filteredMails.map((mail) => {
        let textPreview = mail.text.slice(0,42) + '...';
        let id = mail.id 
        return(
            <Mail
            className = {'app-link'}
            sender = {mail.sender}
            text = {textPreview} 
            type = {mail.type} 
            recipient = {mail.recipient}
            key = {id}  
            id = {id}
            checked = {mail.checked}
            />)
    })

    return(
        <div>
        {filteredMails}
       </div>
    )

}


export default MailsList