import React from 'react'
import {Loader} from '../Loader'
import classNames from 'classnames'
import './ModalLoader.css'

function ModalLoader ({show}) {
    const style = classNames({
        'modal-loader-bg': true,
        'display-modal-loader': show,
    })

    return(
        <div className={style}>
            <section className='modal-loader-main'>
                <Loader />
            </section>
        </div>
    )
}

export default ModalLoader