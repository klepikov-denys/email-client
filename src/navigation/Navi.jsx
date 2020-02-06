import React from 'react'
import './Navi.css'

function Navi({handleClick}){

    return(
        <div className = {'naviBlockStyle'}>
            <button 
                onClick = {handleClick.bind(this, 'INBOX')}
                className = 'btnStyle'  
            >Inbox</button>

            <button 
                onClick = {handleClick.bind(this, 'IMPORTANT')}
                className = 'btnStyle'
            >Important</button>

            <button 
                onClick = {handleClick.bind(this, 'SENT')}                
                className = 'btnStyle'
            >Sent</button>

            <button 
                onClick = {handleClick.bind(this, 'TRASH')}
                className = 'btnStyle'
            >Trash</button>
        </div>
    )
}

export default Navi;