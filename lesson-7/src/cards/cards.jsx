import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function Cardkomponent(props) {
  // console.log(props.dataState1)
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

function Cardkomponent2(props){
 
  return(
  
  props.filterEdChekbox2.map((el,index)=>{
    // console.log(el)
    return(
      <Card style={{ width: '18rem' }} key={index}>
      <Card.Img variant="top" src={el.imageUrl} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.parentCategoryName}
        </Card.Text>
        <Button variant="primary">ყიდვა</Button>
      </Card.Body>
    </Card>
    )
  })

  // return (
  //   <Card style={{ width: '18rem' }}>
  //     <Card.Img variant="top" src={props.filterEdChekbox2?.imageUrl} />
  //     <Card.Body>
  //       <Card.Title>{}</Card.Title>
  //       <Card.Text>
  //         {}
  //       </Card.Text>
  //       <Button variant="primary">ყიდვა</Button>
  //     </Card.Body>
  //   </Card>
  // );

  )
}

export  {Cardkomponent, Cardkomponent2};