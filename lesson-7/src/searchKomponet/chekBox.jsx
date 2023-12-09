
import '../searchKomponet/chekbox.css'


const ChekBoxKomponent = (props)=> {

    function getValueChekbox (event){
        const getValue = event.target.value
        props.getChekId2(getValue)
        // console.log(getValue, 'xxxxxxxxxxxxxxx')
    }
    
    return(
     
        <div className="chekboxDiv">
           
           {props.chekboxAxiosState?.map((el, index)=> {
            
            return(
                <div key={index}  className='chekboxDiv2'>
                   <input type="checkbox" value={el.brandName} onClick={getValueChekbox} />
                   <label htmlFor="input1" > {el.brandName} 
                   </label>
                </div>
                
            )
           })}

        </div> 
   
       
    )
}

export default ChekBoxKomponent