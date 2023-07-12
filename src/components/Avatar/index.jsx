import React from 'react'

const Avatar = ({children,backgroundColor,px,py,color,borderRadius,cursor}) => {
  const style ={
    backgroundColor,
    padding:`${py} ${px}`,
    color:color || 'black',
    borderRadius,
    textAlign:"center",
    cursor:cursor||null,
    textDecoration:"none",
    margin:'7px'
  

  }
  return (
    <div style={style}>{children}</div>
  )
}

export default Avatar