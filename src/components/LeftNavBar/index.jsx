import React from 'react'
import { PiCopySimpleDuotone,PiCloudDuotone} from "react-icons/pi";
import Avatar from '../Avatar'
import './index.css'
import { getSuggestedQuery } from '@testing-library/react';

const LeftNavBar = () => {
  return (
      <div className='NavBar-container'>


       <div className='NavBar-container-1'>
                <PiCloudDuotone style={{width:"50px",height:"50px",margin:"7px", marginTop:"20px"} } />
                <PiCopySimpleDuotone style={{width:"50px",height:"50px",margin:"7px"}}/>
                <PiCopySimpleDuotone style={{width:"50px",height:"50px",margin:"7px"}}/>
                <PiCopySimpleDuotone style={{width:"50px",height:"50px",margin:"7px"}}/>
                <PiCopySimpleDuotone style={{width:"50px",height:"50px",margin:"7px"}}/>
                <PiCopySimpleDuotone style={{width:"50px",height:"50px",margin:"7px"}}/>
                <PiCopySimpleDuotone style={{width:"50px",height:"50px",margin:"7px"}}/>
       </div>

        <Avatar backgroundColor='grey' px="15px" py="15px" borderRadius="50%" > PB</Avatar>



    </div>
  )
}

export default LeftNavBar