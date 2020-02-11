import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMail } from '../actions/mailAction'
import ComposeMailForm from './composeForm/ComposeForm.jsx'
import ModalLoader from '../loader/modalLoader/ModalLoader'
import { useHistory } from 'react-router-dom'

function Compose (){
    const mailsCapacity = useSelector(state => state.mailList.allMails.length)
    const sender = useSelector(state => state.profileReducer.userEmail)
    const [loaderState, setLoaderState] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleFormSubmit = useCallback(
        (newMail) => {
            dispatch(addMail(newMail, mailsCapacity, sender))
            setLoaderState(!loaderState)
            setTimeout(()=> {setLoaderState(!loaderState) 
                history.push('/')}, 4000)
        },
        [dispatch, loaderState, mailsCapacity, sender, history],
    )
    
    
    return(
        <div>
            <ModalLoader show={loaderState} />
            <ComposeMailForm 
                onSubmit={handleFormSubmit}
            />
        </div>
    )
}


export default Compose




