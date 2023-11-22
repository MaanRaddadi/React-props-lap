import React from 'react'

function Programers(props) {
  return (
   
    <div className={props.comp == "Tuwaiq"? "programer-tuwaiq" : "programer-info"}>
       <h3>Name: {props.name}</h3>
<h4>Languages: {props.lang}</h4>
<h4>Experience: {props.exp}</h4>
<h4>Company: {props.comp}</h4>
    </div>
    
  )
}

export default Programers