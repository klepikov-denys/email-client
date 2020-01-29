import React from 'react'
import { Link } from 'react-router-dom'
import './buttonBar.css'
import { useDispatch } from 'react-redux'
import { checkAllMails } from '../actions/checkAllMails'
import { deleteMails } from '../actions/deleteMails'



function ButtonBar ({filterType}){

    const dispatch = useDispatch()
    
    return(
        <div className={'btn-wrapper'}>
            <button className={'button check'}
                onClick = {() => dispatch(checkAllMails(filterType))}
            >&#x2714;</button>

            <button className={'button ref'}>Refresh</button>
            <button className={'button delete'}
                onClick= {() => dispatch(deleteMails())}
            >Delete</button>
            <Link to ='/compose' className={'cmps-link'}>
                <button className={'cmps-button'}>Compose</button>
            </Link>
        </div>
           
        
    )
}

export default ButtonBar