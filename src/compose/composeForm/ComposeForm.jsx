import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { renderComposeInput, renderComposeMailText } from './composeFormUtils/renderComposeFields'
import './composeForm.css'
import { required, emailValid } from './composeFormUtils/composeFormValidators'
function ComposeMailForm(props){
    const {handleSubmit} = props

    return(
        <form className='compose-wrapper' onSubmit={handleSubmit}>
            <Field 
                className='compose-form-input'
                type='text'
                name='email'
                label='To:'
                validate={[required, emailValid]}
                component={renderComposeInput}
                placeholder='Email'
            />
            <Field 
                className='compose-form-input'
                type='text'
                name='subject'
                label='Subject:'
                validate={required}
                component={renderComposeInput} 
                placeholder='Subject'
            />
            <Field 
                type='text'
                name='text'
                component={renderComposeMailText} 
            />
            <button className='compose-submit'>Sent</button>
        </form>
    )
}

export default reduxForm({
    form: 'composeMailForm'
})(ComposeMailForm);