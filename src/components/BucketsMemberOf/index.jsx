import React from 'react'
import './index.css'

const BucketsMemberOf = () => {

  const data = [
    { name: "pqr", budget: "$200,000", spend: "$154,562",forecast :"233,345"},
    
]

  return (
    <div className='buckets-member-container'>
      <h3 style={{margin:"13px" ,textAlign:"start", marginRight:"70%"}}>Buckets you are member of</h3>
      <table style={{height:"10vh"}}>
              
              <tr >
                  <th>Name</th>
                  <th>Budget</th>
                  <th>Spend</th>
                  <th>forecast</th>
              </tr>
             
              {data.map((val, key) => {
                  return (
                      <tr key={key}>
                          <td>{val.name}</td>
                          <td>{val.budget}</td>
                          <td>{val.spend}</td>
                          <td>{val.forecast}</td>
                      </tr>
                  )
              })}
      </table>


    </div>
  )
}

export default BucketsMemberOf