import React, {useState} from 'react'
import './compose.css'
import { useDispatch, useSelector } from 'react-redux'
import { addMail } from '../actions/mailAction'
import { oldMails } from '../mails/oldMails'
function Compose (){
    const mailsCpsty = useSelector(state => state.newMails.length) + oldMails.length + ''

    const [state, setState] = useState({
        wordCapacity: 200,
        sender: '',
        text: '',
        subject: '',
    })

    const dispatch = useDispatch()
    
    
    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(addMail(state.sender, state.text, mailsCpsty))
        setState({
        wordCapacity: 200,
        sender: ' ',
        text: ' ',
        subject: ' ',
    })
    }
    
    const inputHandler = (event) => {
        switch (event.target.name){
        case 'email': 
            setState({
                wordCapacity: 200,
                sender: event.target.value,
                text: ' ',
                subject: ' ',})
            console.log(event.target.name)
            break;
        case 'subject':
            setState({
                wordCapacity: 200,
                sender: state.sender,
                text: ' ',
                subject: event.target.value,})
            console.log(event.target.name)
            break;
        case 'text':
            console.log(event.target.name)
            setState({
                wordCapacity: 200 - event.target.value.length,
                sender: state.sender,
                text: event.target.value,
                subject: state.subject,})
            break;
        default: break;
        }
        }
    
    return(
        <form className='cmps-wrapper' onSubmit={submitHandler}>
            <label className='cmps-label'>
                To:
                <input 
                    type='text' name='email' 
                    className='cmps-input' value={state.sender}
                    onChange={inputHandler}
                />
            </label>
            <label className='cmps-label'>
                Subject:
                <input 
                    type='text' value={state.subject} name='subject' 
                    className='cmps-input' onChange={inputHandler}
                />
            </label>

            <textarea 
                type='text' name='text'
                maxLength='200' 
                value={state.text}
                className='cmps-text'
                onChange={inputHandler}
            ></textarea>

            <input 
                type='submit' value='submit' 
                className='cmps-submit'  

            />

            <p>{state.wordCapacity}</p>
        </form>




    )
}


export default Compose