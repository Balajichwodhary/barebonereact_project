import React from 'react'
import moment from 'moment'
import "./index.css"
import BucketsYouOwn from '../BucketsYouOwn'
import ApprovalAssigned from '../ApprovalAssigned'
import BucketsMemberOf from '../BucketsMemberOf'
import DisplayCard from '../DisplayCard'

const HomeMainScreen = () => {
  return (
    <div className='home-main-container'>
      <div className='home-main-contianer-1'>
          <h1>Hi, Pathipati Balaji</h1> 
          <p style={{marginTop:"30px"}}>Last Scanned on {Date()}</p>

      </div>
          <DisplayCard/>
      
        <BucketsYouOwn/>
        <ApprovalAssigned/>
        <BucketsMemberOf/>

     </div>
  )
}

export default HomeMainScreen