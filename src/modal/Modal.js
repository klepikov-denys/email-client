import React, { useCallback } from 'react'
import ModalProfile from './profile/ModalProfile'
import { useDispatch } from 'react-redux'
import { changeProfile } from '../actions/changeProfile'
import PropTypes from 'prop-types'
import {Modal, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'



function ModalWindow(props){
    const history = useHistory()
    const dispatch = useDispatch()
    const close = props.onHide
    const handleProfileChange = useCallback(() => {
        close()
        dispatch(changeProfile())
        return history.push('/Login')
    },[dispatch, close, history])
    

    return(
        <Modal
            {...props}
            size='lg'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Your profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalProfile />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleProfileChange}>Logout</Button>
            </Modal.Footer>
            
        </Modal>
    )
}

ModalWindow.propTypes ={
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
}

export default ModalWindow;