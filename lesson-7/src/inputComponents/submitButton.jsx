import { Button } from "react-bootstrap"
import SelectBasicExample from "./input1"
import SelectBasicExample2 from "./input2"
import '../inputComponents/inputs.css'


const Submit = ()=> {
    return(
        <>

        <form action="" className="SelectBasicExampleForm">
         
           <SelectBasicExample/>
           <SelectBasicExample2/>
           <Button type="submit">ძებნა</Button>
             
        </form>
          
        </>
       
    )
}

export default Submit