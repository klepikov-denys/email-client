import React from 'react'
import './mail.css'



function Mail(props){
    const [name, text, type]= [props.senderName, props.mailText, props.type]
    let preposition = type === 'SENT'? 'To: ' : ''
    
    
    return(
        <div className={'mail-wrapper'}>
            <p className={'mail-text'}>{preposition}{name}</p>
            <p className={'mail-text-prev'}>{text}</p>
        </div>
    )

}


export default Mail
