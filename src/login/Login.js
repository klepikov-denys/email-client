import React, {useState} from 'react'
import LoginForm from './LoginForm'
import {useDispatch} from 'react-redux'
import {loginAction} from '../actions/login'
import './login.css'
import ModalLoader from '../loader/modalLoader/ModalLoader'

function Login(props){
    const dispatch = useDispatch()
    const submit = (user) =>{
        dispatch(loginAction(user))
    }
    const [loaderState, setLoaderState] = useState(false)
    const handleLoaderState = () => {
        setLoaderState(!loaderState)
    }
   

    return(
        <div className='main-login-form-wrapper'>
            <div className='main-login-form'>
                <div className='main-login-form-text'>
                    <h1 >Welcom to Soap@mail!</h1>
                    <h2 >Please sign in to go further</h2>
                    <ModalLoader show={loaderState} />
                </div>
                <LoginForm 
                    onSubmit={submit} 
                    handleLoaderState={handleLoaderState}
                />  
            </div>
        </div>
    )
}



export default Login