import React, {useState} from 'react'
import './compose.css'
function Compose (){
    

    const [state, setState] = useState({
        wordCapacity: 200
    })

    
    
    return(
        <form className='cmps-wrapper'>
            <label className='cmps-label'>
                To:
                <input type='text' name='email' className='cmps-input' />
            </label>
            <label className='cmps-label'>
                Subject:
                <input type='text' name='subject' className='cmps-input' />
            </label>
            <textarea type='text' 
            maxLength='200' 
            className='cmps-text'
            onChange={(event) => setState({wordCapacity: 200 - event.target.value.length})}
            ></textarea>
            <input type='submit' value='submit' className='cmps-submit'/>
            <p>{state.wordCapacity}</p>
        </form>








        // <div className={'cmps-main'}>
        //     <div className={'cmps-wrapper'}>
        //         <p className={'cmps-title'}>To:</p>
        //         <input className={'cmps-input'}></input>
        //     </div>
        //     <hr className={'cmps-line'}></hr>
            
        //     <div className={'cmps-wrapper'}>
        //         <p className={'cmps-title'}>topic:</p>
        //         <input className={'cmps-input'}></input>
        //     </div>
        //     <hr className={'cmps-line'}></hr>
        //     <textarea className={'cmps-text'} maxLength={state.wordCapacity}></textarea>
        //     <p></p>
        //     <button>send</button>
            
        // </div>
    )
}

export default Compose