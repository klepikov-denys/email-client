import React from 'react'
import './spinner.css'
import classNames from 'classnames'
export function Spinner ({show}) {
    const style = classNames({
        'lds-ring': true,
        'display-spinner': !show,
    })
    return (
        <div className={style}><div></div><div></div><div></div><div></div></div>
    )
}