import React from 'react'
import icon from '../profileIcon.png'
import './ModalProfile.css'
import { useSelector } from 'react-redux'

function ModalProfile(){

    const {userName, userEmail} = useSelector(state => state.profileReducer)
    

    return(
        <div className='modal-profile-wrapper'>
            <img src={icon} alt='icon' className='ico'></img>
            <div className='modal-profile-text-wrapper'>
                <p><strong>Name:</strong>{userName}</p>
                <p><strong>Email:</strong>{userEmail}</p>
            </div>
        </div>
    )
}

export default ModalProfile