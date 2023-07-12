import React from 'react'

const Card = ({amount,text,backgroundColor}) => {

    
    const style={
        display: "flex",
        flexDirection: "column",
        justifyContent:"space-around",
        alignItems: "center",
        borderRadius:"10px",
        width:"200px",
        height:"70px",
        color: "black",
        backgroundColor,
        margin:"5px",
        border:"solid grey"
    }

  return (
    <div className='card' style={style} > 
    <h3 style={{margin:"0px" ,padding:"0px"}}>{amount}</h3>
    <p style={{margin:"0px" ,padding:"0px"}}>{text}</p>
   </div>
  )
}

export default Card