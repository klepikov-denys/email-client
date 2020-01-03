import React from 'react'




function Mail(props){
    let [name, text, type]= [props.senderName, props.mailText, props.type]
    let preposition = type === 'SENT'? 'To: ' : ''
    
    let style = {
        height: '10%',
        border: '1px solid #a2a2a3',
        borderRadius: '5px',
        marginBottom: '1px',
        display: 'flex',
        

        alignItems:'center',
        flexDirection: 'row'
    }
    

    return(
        <div style = {style}>
            <p style = {{flex:'1', textAlign:'center'}}>{preposition}{name}</p>
            <p style = {{flex:'2', textAlign:'center'}}>{text}</p>
        </div>
    )

}


export default Mail
