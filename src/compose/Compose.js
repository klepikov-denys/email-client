import React from 'react'
import './compose.css'
function Compose (){
    
    
    return(
        <div className={'cmps-main'}>
            <div className={'cmps-wrapper'}>
                <p className={'cmps-title'}>To:</p>
                <input className={'cmps-input'}></input>
            </div>
            <hr className={'cmps-line'}></hr>
            
            <div className={'cmps-wrapper'}>
                <p className={'cmps-title'}>topic:</p>
                <input className={'cmps-input'}></input>
            </div>
            <hr className={'cmps-line'}></hr>
            <textarea className={'cmps-text'} maxLength={'200'}></textarea>

            <button>send</button>
            
        </div>
    )
}

export default Compose