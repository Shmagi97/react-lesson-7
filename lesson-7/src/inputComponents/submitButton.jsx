import { Button } from "react-bootstrap"
import '../inputComponents/inputs.css'
import Form from 'react-bootstrap/Form';


const Submit = (props)=> {
    
        const getValueInInputChild = (event)=>{
        const getValue1 = event.target.value;
        props.getValueState(getValue1)
       
       }
      
      
    return(
        <>

        <form action="" className="SelectBasicExampleForm">
         <Form.Select aria-label="Default select example" className='inputs' onChange={getValueInInputChild}>
             <option value="no">search name</option>
            {props.masivStaticState.map((el, index)=> {
            
             return(
             
             <option value={el.id} key={index}>{el.name}</option>
       
             )
            })}
     
        </Form.Select>

        <Form.Select aria-label="Default select example" className='inputs'>
            <option value="no">search brand</option>
           {props.masivStaticState.map((el, index)=> {
        
            return(
              <option value={index} key={index}>{el.brandName}</option>
             )
             })}
          </Form.Select>

          <Button onClick={props.function } >ძებნა</Button>
        </form>
          
        </>
       
    )
}

export default Submit