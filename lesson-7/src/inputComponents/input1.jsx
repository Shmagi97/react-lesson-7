
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Form from 'react-bootstrap/Form';
import "../inputComponents/inputs.css"
import { useState } from 'react';



function SelectBasicExample(props) {
     
  
  
  return (
   <>
   
    
    <Form.Select aria-label="Default select example" className='inputs' >
      
       {/* {props.masivState1.map((el, index)=> {
        
        return(
          <option value={index} key={index}>{el.name}</option>
        )
       })} */}
      
    </Form.Select>

     {/* <input type="number" onChange={(event)=> setIndex(event.target.value)}/> 
     {console.log(index)}   */}

    </>
    
    

  );
}

export default SelectBasicExample;