import React from 'react'
import './Navi.css'

function Navi(props){

    let btnState = props.btnState.map(bool => bool ? bool = 'btnStyle' : bool = 'btnStyle active')
    

    return(
        <div className = {'naviBlockStyle'}>
            <button 
                onClick = {props.handleClick.bind(this, 'INBOX')}
                className = {btnState[0]}
                
            >Inbox</button>

            <button 
                onClick = {props.handleClick.bind(this, 'IMPORTANT')}
                className = {btnState[1]}
            >Important</button>

            <button 
                onClick = {props.handleClick.bind(this, 'SENT')}                
                className = {btnState[2]}
            >Sent</button>

            <button 
                onClick = {props.handleClick.bind(this, 'TRASH')}
                className = {btnState[3]}
            >Trash</button>
        </div>
    )
}

export default Navi;