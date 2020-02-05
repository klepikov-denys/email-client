import React from 'react'
import './composeFormUtils.css'

export const renderComposeInput = ({
    input,
    label,
    type,
    placeholder,
    meta:{ touched, error, warning}
}) => (
    <div>
        <label className='cmps-form-label'>{label}</label>
        <div>
            <input {...input} placeholder={placeholder} className='cmps-form-input' type={type} />
            {touched &&
            ((error && <span className='cmps-error-message'>{error}</span>) ||
            (warning && <span className='cmps-warning-message'>{warning}</span>))}
        </div>
    </div>
)


export const renderComposeMailText = ({
    input,
    label,
    type,
    placeholder,
    meta:{ touched, error, warning}
}) => (
    <div>
        <div>
            <textarea {...input} className='cmps-form-text' type={type} />
            {touched &&
            ((error && <span className='cmps-error-message'>{error}</span>) ||
            (warning && <span className='cmps-warning-message'>{warning}</span>))}
        </div>
    </div>
)