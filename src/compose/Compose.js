import React from 'react'
import './compose.css'
import { useDispatch, useSelector } from 'react-redux'
import { addMail } from '../actions/mailAction'
import ComposeMailForm from './composeForm/ComposeForm'

function Compose (){
    const mailsCpsty = useSelector(state => state.mailList.allMails.length)
    const sender = useSelector(state => state.profileReducer.userEmail)
    let wordCapacity = 600


    const dispatch = useDispatch()

    const submit = (newMail) =>{
        dispatch(addMail(newMail, mailsCpsty, sender))
        console.log(newMail)
    }
     
    
    return(
        <div>
            <ComposeMailForm 
                onSubmit={submit}
            />
            <p className='word-capacity'>{wordCapacity}</p>
        </div>




    )
}


export default Compose