
import './App.css'
import styled from 'styled-components'
import HadComponent from "../sectionHadComponent/had"
import Teq from '../teqCont/teq'
import Masivi from '../masivi/masiv'
import GetInfofromMasiv from '../geiInfo/getInfo'


const Section = styled.section`
    width: 80%;
    // height: 200px;
    background-color: aqua;
    margin: 0 auto;
    border-radius: 15px;
    margin-top:30px;
    background-color: white;
    // display: flex;
    // justify-content: center;
    // align-items: center;

`

function App() {
   
  

  return (
    <>
    <Section>
       <HadComponent/>
       
       <div className="SelectBasicExampleDiv">
         <Teq/>
         
         <Masivi/>
        
       </div>
      
    </Section>

    <GetInfofromMasiv/>
     

    </>

    
   
    
    
    
  )
}

export default App
