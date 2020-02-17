import React, { useCallback } from 'react'
import './Navi.css'
import Button from 'react-bootstrap/Button'

function Navi({handleClick}){
    const handleBoundClick = useCallback((type) => handleClick.bind(this, type), [handleClick])
    
    return(
        <div className = 'naviBlockStyle'>
            <Button 
                variant='outline-primary' 
                onClick = {handleBoundClick('INBOX')}
                className='naviBtnStyle'
            >Inbox</Button>

            <Button 
                variant='outline-primary'
                onClick = {handleBoundClick('IMPORTANT')}
                className='naviBtnStyle'
            >Important</Button>

            <Button 
                variant='outline-primary'
                onClick = {handleBoundClick('SENT')}      
                className='naviBtnStyle'          
            >Sent</Button>

            <Button 
                variant='outline-primary'
                onClick = {handleBoundClick('TRASH')}
                className='naviBtnStyle'
            >Trash</Button>
        </div>
    )
}

export default Navi;