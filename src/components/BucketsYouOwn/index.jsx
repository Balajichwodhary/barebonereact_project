import React from 'react'
import './index.css'

const BucketsYouOwn = () => {

  const data = [
    { name: "ABC", budget: "$200,000", spend: "$134,532",forecast :"233,345"},
    { name: "XYZ", budget: "$250,000", spend: "$156,532",forecast :"273,895" },
]

  return (
    <div className='buckets-container'>
      <h3 style={{margin:"13px" ,textAlign:"start", marginRight:"77%"}}>Buckets You Own</h3>
              
      <table>
              
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

export default BucketsYouOwn