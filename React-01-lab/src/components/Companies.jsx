import React from 'react'
import Programers from './programers'
import Services from './Services'
function Companies(props) {
  return (
   
   <>
   <div className='main-container'>
 <h3>Company Name: {props.compName}</h3>
<h4>Employees Number: {props.emp}</h4>
<h4>Founded on year:  {props.year}</h4>

<p>Programmers:</p>
<Programers name={props.name} lang={props.lang} exp={props.exp} comp={props.comp}></Programers>
<Programers name={props.name2} lang={props.lang2} exp={props.exp2} comp={props.comp}></Programers>
<Programers name={props.name3} lang={props.lang3} exp={props.exp3} comp={props.comp}></Programers>
<Services service={props.service} price={props.price}></Services>

</div>
</>
    
  )
}

export default Companies