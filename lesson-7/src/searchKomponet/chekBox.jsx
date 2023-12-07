import { useState } from 'react'
import '../searchKomponet/chekbox.css'


const ChekBoxKomponent = (props)=> {

    const [name, setName]  = useState([])
  

    
    
    if (props.chekboxAxiosState){
        // console.log(props.chekboxAxiosState[0]?.name)

        const filterName = props.chekboxAxiosState?.map((el)=> el.name )
        

        props.chekboxAxiosState.map((el, index)=> {
           
            const nameSet = el.name
            // setName(nameSet)
            // console.log(nameSet)
        })
    } 
    
    return(
     
        <div className="chekboxDiv">
           <input type="checkbox" id='input1' />
           <label htmlFor="input1" > </label>

           <input type="checkbox" id='input2'/>
           <label htmlFor="input2">wwwwwwww</label>

           <input type="checkbox" id='input3' />
           <label htmlFor="input3">wwwwwwww</label>

           <input type="checkbox" id='input4'/>
           <label htmlFor="input4">wwwwwwww</label>

           <input type="checkbox"  id='input5'/>
           <label htmlFor="input5">wwwwwwww</label>
        </div>
       
        
   
       
    )
}

export default ChekBoxKomponent