import React from 'react'
import './mail.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkMails } from '../actions/checkMail'



function Mail(props){
    const [sender, text, type, recipient, id]= [props.senderName, props.mailText, props.type, props.recipientName, props.id]
    let name = type === 'SENT'? `To: ${recipient}` : `${sender}`
    const dispatch = useDispatch()
    const check = useSelector((state) => state.allMails[id].checked)
    
    
    return(
        <div className={'mail-wrapper'}>
            <form className='mail-text-input'>
                <input type='checkbox' checked={check} onChange={() => dispatch(checkMails(id))}></input>
            </form>

            <Link to={`/mail/${id}`}  className={'link'}>
                <div className= {'mail-cont-wrapper'}>
                    <p className={'mail-text'}>{name}</p>
                    <p className={'mail-text-prev'}>{text}</p>
                </div>
            </Link>
        </div>
    )

}


export default Mail
