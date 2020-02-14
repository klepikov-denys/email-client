import React from 'react'
import LoginForm from './LoginForm'
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../thunkCreators/loginThunk'
import './login.css'
import ModalLoader from '../loader/modalLoader/ModalLoader'
import { useHistory } from 'react-router-dom'

function Login(props){
    const dispatch = useDispatch()
    const loaderStatus = useSelector(state => state.loaders.loaderIsActive)
    const history = useHistory()
    const submit = (user) => {
        dispatch(login(user, history))
    }
  
    
   

    return(
        <div className='main-login-form-wrapper'>
            <div className='main-login-form'>
                <div className='main-login-form-text'>
                    <h1 >Welcome to Soap@mail!</h1>
                    <h2 >Please sign in to go further</h2>
                    <ModalLoader show={loaderStatus} />
                </div>
                <LoginForm 
                    onSubmit={submit} 
                />  
            </div>
        </div>
    )
}



export default Login