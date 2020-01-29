import React from 'react'
import './Navi.css'
import classNames from 'classnames'

function Navi(props){
    let btnStyle = classNames({
        btnStyle: true
    })
    

    return(
        <div className = {'naviBlockStyle'}>
            <button 
                onClick = {props.handleClick.bind(this, 'INBOX')}
                className = {btnStyle}  
            >Inbox</button>

            <button 
                onClick = {props.handleClick.bind(this, 'IMPORTANT')}
                className = {btnStyle}
            >Important</button>

            <button 
                onClick = {props.handleClick.bind(this, 'SENT')}                
                className = {btnStyle}
            >Sent</button>

            <button 
                onClick = {props.handleClick.bind(this, 'TRASH')}
                className = {btnStyle}
            >Trash</button>
        </div>
    )
}

export default Navi;