import React from 'react'

function Services(props) {
  return (
    <div>
   <h4>Service: {props.service}</h4>
   <h4>Price: {props.price}</h4>
    </div>
  )
}

export default Services