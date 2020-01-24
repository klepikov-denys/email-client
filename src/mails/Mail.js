import React from 'react'
import './mail.css'



function Mail(props){
    const [sender, text, type, recipient]= [props.senderName, props.mailText, props.type, props.recipientName]
    let name = type === 'SENT'? `To: ${recipient}` : `${sender}`
    
    
    return(
        <div className={'mail-wrapper'}>
            <p className={'mail-text'}>{name}</p>
            <p className={'mail-text-prev'}>{text}</p>
        </div>
    )

}


export default Mail
