import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMail } from '../actions/mailAction'
import ComposeMailForm from './composeForm/ComposeForm.jsx'
import ModalLoader from '../loader/modalLoader/ModalLoader'
import { useHistory } from 'react-router-dom'

function Compose (){
    const mailsCpsty = useSelector(state => state.mailList.allMails.length)
    const sender = useSelector(state => state.profileReducer.userEmail)
    const [loaderState, setLoaderState] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleStateOnSubmit = () =>{
        setLoaderState(!loaderState)
        history.push('/')
    }
    const submit = (newMail) =>{
        dispatch(addMail(newMail, mailsCpsty, sender))
        setLoaderState(!loaderState)
        setTimeout(handleStateOnSubmit, 4000)
    }
    
    return(
        <div>
            <ModalLoader show={loaderState} />
            <ComposeMailForm 
                onSubmit={submit}
            />
        </div>
    )
}


export default Compose




