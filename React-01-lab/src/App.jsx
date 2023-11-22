
import './App.css'
import Companies from './components/Companies'
import Programers from './components/programers'


function App(props) {
 

  return (
    <>
    <div className='container'>
   <Companies compName="STC" emp="15" year="1990" name="Maan" name2="Mohammed" name3="Khalid" lang="C++, Java, C#" lang2="C, C++" lang3="Python" exp="15 Years" exp2="10 Years" exp3="5 Years" service="Internet" price="from 1500SAR Up to 4000SAR" comp="STC">
 </Companies>
 <Companies compName="Tuwaiq" emp="30" year="2020" name="Fahad" name2="Omar" name3="Osama" lang="C++, Java, C#" lang2="C, C++" lang3="Python" exp="15 Years" exp2="10 Years" exp3="5 Years" service="Education" price="Free" comp="Tuwaiq">
 </Companies>
 <Companies compName="Aramco" emp="400" year="1970" name="Nora" name2="Zaid" name3="Lujain" lang="C++, Java, C#" lang2="C, Python" lang3="Python" exp="15 Years" exp2="10 Years" exp3="5 Years" service="Internet" price="from 1500SAR Up to 55000SAR" comp="Aramco">
 </Companies>
   </div>
  
    </>
  )
}

export default App
