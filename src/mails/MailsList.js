import React from 'react'
import Mail from './Mail'
import {Spinner} from '../loader/spinner/Spinner.jsx'
import './mailList.css'
import {useSelector} from 'react-redux'




function MailsList (props) {
    const showSpinner = useSelector((state) => state.loaders.spinnerIsActive)
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
        <div className='mail-list-wrapper'>
            <Spinner show={showSpinner} />
            <div className='mail-list-mails-wrapper'>
                {filteredPreviews}
            </div>
        </div>
        
    )

}


export default MailsList