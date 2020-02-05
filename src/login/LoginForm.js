import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { emailVal, required, alphaNumeric } from './loginFormUtils/formValidators'
import { renderField } from './loginFormUtils/renderField.jsx'
import { useHistory } from 'react-router'

function LoginForm(props){    
    const {handleSubmit, submitting, handleLoaderState} = props
    let history = useHistory()
    const handleButtonClick = ()=>{
        handleLoaderState()
        setTimeout(()=> {history.push('/')
        handleLoaderState()    
        }, 2000)
    }

   
    return(
        <form onSubmit={handleSubmit}>
            <Field 
                name='email' 
                component={renderField} 
                type='text' 
                label='Enter your Email address:' 
                validate={[emailVal, required]}
            />
            
            <Field 
                name='name' 
                component={renderField} 
                type='text' 
                label='Enter your name:' 
                validate={required}
                warn={alphaNumeric}
            />
            
            <button type='submit' disabled={submitting}
                onClick={handleButtonClick}
            >submit</button>
         </form>
    )
}


const LoginFormCom = reduxForm({
    form: 'login',
})(LoginForm)

export default LoginFormCom;