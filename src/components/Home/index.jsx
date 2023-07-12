import React from 'react'
import './index.css'
import LeftNavBar from '../LeftNavBar'
import HomeMainScreen from '../HomeMainSreen'

const Home = () => {
  return (
    <div className='home-contaier-1'>
        <LeftNavBar/>
        <HomeMainScreen/>
    </div>
  )
}

export default Home