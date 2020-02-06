import React from 'react'
import Mail from './Mail'




function MailsList (props) {
    const filteredMails = props.mails.concat().filter((obj) => obj.type === props.filterType)
     let filteredPreviews = filteredMails.map((mail) => {
        let textPreview = mail.text.slice(0,42) + '...';
        let id = mail.id 
        return(
            <Mail
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
        {filteredPreviews}
       </div>
    )

}


export default MailsList