
import { useState } from 'react'
import '../searchKomponet/chekbox.css'



const ChekBoxKomponent = (props)=> {

    const [cheked, setCheked] = useState(false)
    console.log(cheked)

    function getValueChekbox (event){
        const getValue = event.target.value
        props.getChekId2(getValue)
   
    }

    function chekedFn(event){
        setCheked(event.target.checked)
    }

    const chekboxAxiosStateNewSet =  [...new Set(props.chekboxAxiosState?.map((el)=> el.brandName))]
  
    return(
     
        <div className="chekboxDiv">
           
           {chekboxAxiosStateNewSet?.map((el, index)=> {
  
            return(
                <div key={index}  className='chekboxDiv2'>
                   <input type="checkbox" value={el} onChange={chekedFn} checked={cheked} onClick={getValueChekbox}   />
                   <label htmlFor="input1" > {el} 
                   </label>
                </div>
                
            )
           })}

        </div> 
   
       
    )
}

export default ChekBoxKomponent