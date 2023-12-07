import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function BasicExample(props) {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.dataState1?.imageUrl} />
      <Card.Body>
        <Card.Title>{props.dataState1?.name}</Card.Title>
        <Card.Text>
          {props.dataState1?.price + " " + "₾"}
        </Card.Text>
        <Button variant="primary">ყიდვა</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;