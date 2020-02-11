import React from 'react'
import { useHistory } from 'react-router-dom'
import './buttonBar.css'
import { useDispatch } from 'react-redux'
import { checkAllMails } from '../actions/checkAllMails'
import { deleteMails } from '../actions/deleteMails'
import { Button } from 'react-bootstrap'

function ButtonBar ({filterType}){
    const dispatch = useDispatch()
    const history = useHistory()
    
    return(
        <div className={'btn-wrapper'}>
            <Button 
                size='sm'
                variant="outline-secondary"
                className={'button check'}
                onClick = {() => dispatch(checkAllMails(filterType))}>&#x2714;
            </Button>
            <Button 
                size='sm'
                variant="outline-success"
                className={'button ref'}>Refresh
            </Button>
            <Button 
                size='sm'
                variant="outline-danger"
                className={'button delete'}
                onClick= {() => dispatch(deleteMails())}>Delete
            </Button>
            <Button 
                size='sm'
                variant="outline-dark"
                className={'button compose'}
                onClick={() => (history.push('/Compose'))}>Compose
            </Button>
            
        </div>
           
        
    )
}

export default ButtonBar