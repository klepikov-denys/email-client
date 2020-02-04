import React, {useState, useCallback} from 'react'
import './compose.css'
import { useDispatch, useSelector } from 'react-redux'
import { addMail } from '../actions/mailAction'

function Compose (){
    const mailsCpsty = useSelector(state => state.mailList.allMails.length)
    const sender = useSelector(state => state.profileReducer.userEmail)
    let wordCapacity = 600

    const [state, setState] = useState({
        wordCapacity,
        recipient: '',
        text: '',
        subject: '',
    })

    const [voidSpace, setvoidSpace] = useState(false)

    const dispatch = useDispatch()
  
    const submitHandler = (event) => {
        event.preventDefault()
        if(state.recipient && state.text && state.subject){
            dispatch(addMail(state.recipient, state.text, mailsCpsty, state.subject, sender))
            setState({
            wordCapacity: state.wordCapacity,
            recipient: ' ',
            text: ' ',
            subject: ' ',
            })
            setvoidSpace(false)
            return
        }else{
        setvoidSpace(true)
        }
        
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
                <input type='text' name='email' 
                    className={(voidSpace && !state.recipient)?'cmps-input void-space':'cmps-input'} 
                    value={state.recipient}
                    onChange={inputHandler}
                />
            </label>
            <label className='cmps-label'>
                Subject:
                <input type='text' value={state.subject} name='subject' 
                className={(voidSpace && !state.subject)?'cmps-input void-space':'cmps-input'} 
                    onChange={inputHandler} 
                />
            </label>

            <textarea type='text' name='text' maxLength={wordCapacity} value={state.text}
                className={(voidSpace && !state.text)?'cmps-text void-space':'cmps-text'} 
                onChange={inputHandler}>
            </textarea>
            <div>
                <p className='word-capacity'>{state.wordCapacity}</p>
                <input type='submit' value='Sent' className='cmps-submit' />
            </div>
            
        </form>




    )
}


export default Compose