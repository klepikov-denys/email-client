import React, { useCallback } from 'react'
import './mail.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { checkMails } from '../actions/checkMail'
import PropTypes from 'prop-types' 
import classNames from 'classnames'

function Mail({sender, text, type, recipient, id, checked}){
    let name = type === 'SENT'? `To: ${recipient}` : `${sender}`
    const dispatch = useDispatch()
    const changeHandler = useCallback(()=> dispatch(checkMails(id)),[dispatch, id])
    const style = classNames({
            mailWrapper: true,
            deleted: type === 'TRASH' 
        })
    
    
    return(
        <div className={style}>
            <form className='mail-text-input'>
                <input type='checkbox' checked={checked}
                    onChange={changeHandler}
                    disabled={type === 'TRASH'}
                />
            </form>

            <Link to={`/mail/${id}`}  className={'link'}>
                <div className= {'mail-cont-wrapper'}>
                    <p className={'mail-text'}>{name}</p>
                    <p className={'mail-text-prev'}>{text}</p>
                </div>
            </Link>
        </div>
    )

}

Mail.propTypes = {
    sender: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    checked: PropTypes.bool.isRequired,
    recipient:  PropTypes.string.isRequired,
}


export default Mail
