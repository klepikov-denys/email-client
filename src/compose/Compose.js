import React, {useState, useCallback} from 'react'
import './compose.css'
import { useDispatch, useSelector } from 'react-redux'
import { addMail } from '../actions/mailAction'

function Compose (){
    const mailsCpsty = useSelector(state => state.allMails.length)

    let wordCapacity = 600

    const [state, setState] = useState({
        wordCapacity,
        recipient: '',
        text: '',
        subject: '',
    })

    const dispatch = useDispatch()
    
    
    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(addMail(state.recipient, state.text, mailsCpsty, state.subject))
        setState({
        wordCapacity: state.wordCapacity,
        recipient: ' ',
        text: ' ',
        subject: ' ',
    })
    }
    
    const inputHandler = useCallback(
        ({target:{name, value}}) => {
            switch (name){
                case 'email': 
                    setState({
                        wordCapacity: state.wordCapacity,
                        recipient: value,
                        text: state.text,
                        subject: state.subject,
                        })
                    
                    break;
                    
                case 'subject':
                    setState({
                        wordCapacity: state.wordCapacity,
                        recipient: state.recipient,
                        text: state.text,
                        subject: value,})
                    break;
    
                case 'text':
                    setState({
                        wordCapacity: wordCapacity - value.length,
                        recipient: state.recipient,
                        text: value,
                        subject: state.subject,})
                    break;
                default: break;
            }
        },
        [state.recipient, state.subject, state.wordCapacity, wordCapacity, state.text],
    ) 
    
    return(
        <form className='cmps-wrapper' onSubmit={submitHandler}>
            <label className='cmps-label'>
                To:
                <input 
                    type='text' 
                    name='email' 
                    className='cmps-input' 
                    value={state.recipient}
                    onChange={inputHandler}
                />
            </label>
            <label className='cmps-label'>
                Subject:
                <input 
                    type='text' value={state.subject} 
                    name='subject' 
                    className='cmps-input' 
                    onChange={inputHandler}
                />
            </label>

            <textarea 
                type='text' name='text'
                maxLength={wordCapacity} 
                value={state.text}
                className='cmps-text'
                onChange={inputHandler}
            ></textarea>

            <input 
                type='submit' 
                value='submit' 
                className='cmps-submit'  
            />

            <p>{state.wordCapacity}</p>
        </form>




    )
}


export default Compose