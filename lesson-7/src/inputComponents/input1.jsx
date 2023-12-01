
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Form from 'react-bootstrap/Form';
import "../inputComponents/inputs.css"



function SelectBasicExample() {
  return (
    <>

    <form action="">


      
    </form>
    <Form.Select aria-label="Default select example" className='inputs'>
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      
    </Form.Select>

   
    </>
    

  );
}

export default SelectBasicExample;