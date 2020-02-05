import React, {useState} from 'react'
import LoginForm from './LoginForm'
import {useDispatch} from 'react-redux'
import {loginAction} from '../actions/login'
import './login.css'
import { Loader } from '../loader/Loader'
import classNames from 'classnames'

function Login(props){
    const dispatch = useDispatch()
    const submit = (user) =>{
        dispatch(loginAction(user))
    }
    const [loaderState, setLoaderState] = useState(false)
    const handleLoaderState = () => {
        setLoaderState(!loaderState)
    }
    const clName = classNames({
        'login-displayNone': loaderState
    })

    return(
        <div className='main-login-form-wrapper'>
            <div className='main-login-form'>
                <div className='main-login-form-text'>
                    <h1 className={clName}>Welcom to Soap@mail!</h1>
                    <h2 className={clName}>Please sign in to go further</h2>
                    {loaderState && <Loader className='main-login-loader' />}
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