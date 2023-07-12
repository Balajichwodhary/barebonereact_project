import React from 'react'
import './index.css'

const ApprovalAssigned = () => {

  const data = [
    { name: "KMC", current_budget: "$200,000", Requested_budget: "$154,562", requestedBy :"Balaji"},
    
]

  return (
    <div className='ApproalAssigned'>
      <h3 style={{margin:"13px" ,textAlign:"start", marginRight:"70%"}}>Approvals assigned to you</h3>

      <table style={{height:"10vh"}}>
              
              <tr >
                  <th>Name</th>
                  <th>Current Budget</th>
                  <th>Requested Budget</th>
                  <th>Request By</th>
                  <th> </th>
              </tr>
             
              {data.map((val, key) => {
                  return (
                      <tr key={key}>
                          <td>{val.name}</td>
                          <td>{val.current_budget}</td>
                          <td>{val.Requested_budget}</td>
                          <td>{val.requestedBy}</td>
                          <td><button >Approve</button> <button>Reject</button></td>
                      </tr>
                  )
              })}
      </table>
    </div>
  )
}

export default ApprovalAssigned