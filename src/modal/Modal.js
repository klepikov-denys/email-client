import React, { useCallback } from 'react'
import classNames from 'classnames'
import './modal.css'
import ModalProfile from './profile/ModalProfile'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeProfile } from '../actions/changeProfile'
import PropTypes from 'prop-types'



function Modal({ show, handleClose }){
    const dispatch = useDispatch()
    const handleProfileChange = useCallback(() => {
        handleClose()
        dispatch(changeProfile())
    },[dispatch, handleClose])
    
    const style = classNames({
        modal: true,
        'display': show,
        'displayNone': !show
    })

    return(
        <div className={style}>
            <section className='modal-main'>
                <button className='close' onClick={handleClose}>X</button>
                <ModalProfile />
                <hr className='modal-line'></hr>
                <Link to='/Login'>
                    <button className='changeProfile' onClick={handleProfileChange}>Change Profile</button>
                </Link>
            </section>
            
        </div>
    )
}

Modal.propTypes ={
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
}

export default Modal;