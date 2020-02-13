import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ComposeMailForm from './composeForm/ComposeForm.jsx'
import ModalLoader from '../loader/modalLoader/ModalLoader'
import { sendMail } from '../thunkCreators/sendMailThunk'
import { useHistory } from 'react-router-dom'

function Compose (){
    const [mailsCapacity, loaderState] = useSelector(state => [state.mailList.allMails.length, state.mailList.loaderIsActive])
    const sender = useSelector(state => state.profileReducer.userEmail)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (newMail) =>{
        dispatch(sendMail(newMail, mailsCapacity, sender, history))
    }
    
    return(
        <div>
            <ModalLoader show={loaderState} />
            <ComposeMailForm 
                onSubmit={handleSubmit}
            />
        </div>
    )
}


export default Compose




