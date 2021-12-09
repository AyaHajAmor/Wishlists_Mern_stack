import React from 'react';
import image1 from '../images/image1.svg';
import { Row ,Col} from 'react-bootstrap';

const Welcome = () => {
  return (
    <div style={{marginTop:'10%'}} >
      
  <Row >
    <Col sm={6}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  </Col>  
    <Col sm={6}>
        <img src={image1} style={{width:'100%'}}/>
    </Col>
  </Row>
    </div>

  )
}

export default Welcome