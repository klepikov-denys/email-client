import React from 'react'
import './renderField.css'
export const renderField = ({
    input,
    label,
    type,
    meta:{ touched, error, warning}
}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} className='login-input' placeholder={'Write here'} type={type} />
            {touched &&
            ((error && <span className='login-error-message'>{error}</span>) ||
            (warning && <span className='login-warning-message'>{warning}</span>))}
        </div>
    </div>
)