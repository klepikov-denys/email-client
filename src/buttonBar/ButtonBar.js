import React from 'react'
import { Link } from 'react-router-dom'
import './buttonBar.css'


function ButtonBar (props){

    return(
        <div className={'btn-wrapper'}>
            <button className={'button check'}>&#x2714;</button>
            <button className={'button'}>Refresh</button>
            <button className={'button'}>Delete</button>
            <Link to ='/compose' className={'cmps-link'}>
                <button className={'cmps-button'}>Compose</button>
            </Link>
        </div>
           
        
    )
}

export default ButtonBar