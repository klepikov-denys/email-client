import React from 'react'
import { Link } from 'react-router-dom'


function ButtonBar (props){

    let style = {
        height: '100%',
        display: 'flex',
        alignItems:'center',
        
    }

    return(
        <div style = {style}>
            <button style = {{flex:'1', margin:'0 4px'}}>&#x2714;</button>
            <button style = {{flex:'2', margin:'0 4px'}}>Refresh</button>
            <button style = {{flex:'2', margin:'0 4px'}}>Delete</button>
            <Link to ='/compose' style = {{flex:'3', margin:'0 10px 0 4px', paddingBottom:'2px'}}>
                <button style={{width:'100%', height:'100%', cursor:'pointer'}}>Compose</button>
            </Link>
        </div>
           
        
    )
}

export default ButtonBar