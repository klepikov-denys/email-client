import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { emailVal, required, alphaNumeric } from './loginFormUtils/formValidators'
import { renderField } from './loginFormUtils/renderField.jsx'

function LoginForm(props){    
    const {handleSubmit, submitting} = props

   
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
            
            <button type='submit' disabled={submitting} >submit</button>
         </form>
    )
}


const LoginFormCom = reduxForm({
    form: 'login',
})(LoginForm)

export default LoginFormCom;