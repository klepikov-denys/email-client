import React from 'react'
import './Navi.css'
import Button from 'react-bootstrap/Button'

function Navi({handleClick}){
    
    return(
        <div className = 'naviBlockStyle'>
            <Button 
                variant='outline-primary' 
                onClick = {handleClick.bind(this, 'INBOX')}
                className='naviBtnStyle'
            >Inbox</Button>

            <Button 
                variant='outline-primary'
                onClick = {handleClick.bind(this, 'IMPORTANT')}
                className='naviBtnStyle'
            >Important</Button>

            <Button 
                variant='outline-primary'
                onClick = {handleClick.bind(this, 'SENT')}      
                className='naviBtnStyle'          
            >Sent</Button>

            <Button 
                variant='outline-primary'
                onClick = {handleClick.bind(this, 'TRASH')}
                className='naviBtnStyle'
            >Trash</Button>
        </div>
    )
}

export default Navi;