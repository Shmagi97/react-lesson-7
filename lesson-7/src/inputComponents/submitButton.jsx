import { Button } from "react-bootstrap"
import SelectBasicExample from "./input1"
import SelectBasicExample2 from "./input2"
import '../inputComponents/inputs.css'


const Submit = (props)=> {
    return(
        <>

        <form action="" className="SelectBasicExampleForm">
         
           <SelectBasicExample
          
            // masivState1 = {props.masivState}
           
           />
           {/* {console.log(props.masivState, 'sjjsjs')} */}
           
           <SelectBasicExample2
            //   masivState1 = {props.masivState}
           />
           <Button type="submit" onClick={props.function}>ძებნა</Button>
             
        </form>

        {/* {console.log(props.inpustState)} */}
          
        </>
       
    )
}

export default Submit