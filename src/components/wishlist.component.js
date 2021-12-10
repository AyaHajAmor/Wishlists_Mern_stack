import React from 'react';
import { Row, ListGroup, Col, Tab, Button} from 'react-bootstrap';

const Wishlist = () => {
  return (
    <div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={2} >
            <Button variant="outline-warning" className='mr-3' > Add Widhlist  <span>  </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>
            </Button>
          
            <ListGroup >
              <ListGroup.Item action href="#link1"  >
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Link 2
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                helloo
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                helloo2
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
        
      </Tab.Container>
    </div>

  )
}

export default Wishlist