import React from 'react'
import LoginForm from './LoginForm'
import {useDispatch} from 'react-redux'
import {loginAction} from '../actions/login'
import './login.css'
function Login(props){

    const dispatch = useDispatch()
    
    const submit = (user) =>{
        console.log(user)
        dispatch(loginAction(user))
    }

    return(
        <div className='main-login-form-wrapper'>
        <div className='main-login-form'>
            <h1>Welcom to Soap@mail!</h1>
            <h2>Please sign in to go further</h2>
            <LoginForm onSubmit={submit}></LoginForm>
        </div>
        </div>
    )
}



export default Login