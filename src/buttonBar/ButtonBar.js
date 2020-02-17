import React, {useCallback} from 'react'
import { useHistory } from 'react-router-dom'
import './buttonBar.css'
import { useDispatch } from 'react-redux'
import { checkAllMails } from '../actions/checkAllMails'
import { deleteMails } from '../actions/deleteMails'
import { Button } from 'react-bootstrap'

function ButtonBar ({filterType}){
    const dispatch = useDispatch()
    const history = useHistory()
    const handleCheck = useCallback(() => dispatch(checkAllMails(filterType)), [dispatch, filterType])
    const handleDelete = useCallback(() => dispatch(deleteMails()), [dispatch])
    
    return(
        <div className={'btn-wrapper'}>
            <Button 
                size='sm'
                variant="outline-secondary"
                disabled={filterType==='TRASH'}
                className={'button check'}
                onClick = {handleCheck}>&#x2714;
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
                onClick= {handleDelete}>Delete
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