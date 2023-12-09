
import './App.css'
import styled from 'styled-components'
import HadComponent from "../sectionHadComponent/had"
import Teq from '../teqCont/teq'
import Masivi from '../masivi/masiv'
import GetInfofromMasiv from '../geiInfo/getInfo'
import { useState } from 'react';
import SearchKomponent from '../searchKomponet/search'

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
   
  const [data, setData] = useState()
  const [axiosdataapp, setAxiosdataapp] = useState([])
  const [chekid, setChekid]  = useState ()
  // console.log(chekid) 

  const getTitle = (value) => {
    setData(value)
  }

  const getDataAxios = (value) =>{
    setAxiosdataapp(value)
   
  }

  function getChekboxId (value){
    setChekid(value)
  }

 const filteredChekIdAxios = axiosdataapp?.filter(el => el.brandName === chekid)

        // console.log(axiosdataapp,'brandName') 

  return (
    <div className='appDivdisplayGred'>
   
    <Section>
       <HadComponent/>
       <SearchKomponent
        axiosdataState = {axiosdataapp}
        getChekId = {getChekboxId}
       />
       <div className="SelectBasicExampleDiv">
         <Teq/>
         
         <Masivi
         getDataFn = {getTitle}
         getAxiosFn = {getDataAxios}
         />
        
       </div>
      
    </Section>

    <GetInfofromMasiv
      dataState = {data}
      filterEdChekbox = {filteredChekIdAxios}
    
    />
      

    </div>

    
   
    
    
    
  )
}







export  {App}
