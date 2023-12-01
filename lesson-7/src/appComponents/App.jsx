
import './App.css'
import SelectBasicExample from "../inputComponents/input1"
import SelectBasicExample2 from "../inputComponents/input2"
import styled from 'styled-components'
import HadComponent from "../sectionHadComponent/had"
import Teq from '../teqCont/teq'
import Submit from '../inputComponents/submitButton'
import Masivi from '../masivi/masiv'


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
         
         <Submit/>
        
       </div>
      
    </Section>

   
     <Masivi/>

    </>

    
   
    
    
    
  )
}

export default App
