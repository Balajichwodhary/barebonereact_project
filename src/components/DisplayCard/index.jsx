import React from 'react'
import Card from '../Card'
import './index.css'

const DisplayCard = () => {
   
  return (
    <div className='display-card' >
        <Card amount="$ 400,000" text="Total Budget you own" backgroundColor="white"/>
        <Card amount="$ 279,465" text="Spent Money-to-date" backgroundColor="rgb(205, 224, 245)"/>
        <Card amount="$ 2,334,134" text="forcasted till last-month" backgroundColor="aqua"/>

        
    </div>
  )
}

export default DisplayCard