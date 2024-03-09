import React from 'react'
import { Link } from 'react-router-dom'

function Path({name}) {
    return (
        <div style={{ paddingTop: '50px',paddingBottom:'20px', display: 'flex', alignItems: 'center',justifyContent:"center",gap:'2px'}}>
            <Link to="/"><div style={{fontSize:'20px',color:'#fff',cursor:'pointer'}}>Home</div></Link>
            <Link to={name}><div style={{fontSize:'20px',color:'#ccc',cursor:'pointer'}}>{name}</div></Link>
        </div>
    )
}

export default Path
