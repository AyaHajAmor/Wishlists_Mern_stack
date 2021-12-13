

import React, { useState, useEffect } from 'react';
import { useModal } from 'react-hooks-use-modal'
import { Row, Form, Col, Button, ListGroup, Tab } from 'react-bootstrap';
import './style.css'
import { connect } from 'react-redux';
import { saveWishlist, listWishlist } from '../actions/wishlist_actions'
import { ProductsOfWishlist } from './productsOfWishlist.component';


const WishlistComponent = ({ saveWishlist, listWishlist,arrayWishlist, loading }) => {
  var id = localStorage.getItem('id_user');
  var removeFirstChar = id.slice(1);
  var id_user = removeFirstChar.slice(0, removeFirstChar.length - 1);
  useEffect(() => {
    listWishlist(id_user);
  }, []);
  const [Modal, open, close] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });

  const [wishlistData, SetWishlistData] = useState({
    name: '',
    id_user: '',
  });
  const { name } = wishlistData;

  const onChange = (e) =>
    SetWishlistData({ ...wishlistData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    try {
      e.preventDefault();


      saveWishlist(name, id_user);
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#0">
        <Row>
          <Col sm={2}  className='mt-2 border border-bottom-0  border-top-0  '>
            <Button className='m-1' variant="outline-warning" onClick={open} > Add Widhlist  <span>  </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
              </svg>
            </Button>

            <Modal >
              <div style={{ width: '400px', }} className='bg-white p-4 m-4  text-center' >
                <Form onSubmit={(e) => onSubmit(e)} >
                  <h4 className="mb-4 mt-4">Add Wishlist</h4> <hr />
                  <Form.Group as={Row} className="mb-3" >
                    <Form.Control type="text" name="name" placeholder="Name of wishlist" onChange={(e) => onChange(e)} />
                  </Form.Group>
                  <Button variant="dark" type="submit" className="mt-2 "  >Save</Button>{' '}
                  <Button variant="secondary" onClick={close} className="mt-2 "  >Close</Button>{' '}
                </Form>
              </div>
            </Modal>
          </Col>
          </Row>
          <Row >
          {arrayWishlist?.data?.map((wish, key) =>
          <React.Fragment  >
            <Col sm={2}  className='border border-bottom-0  border-top-0  ' >
              <ListGroup className='mt-1 '  >
                <ListGroup.Item className='menu' href={'#'+key} >
                  {wish.name}
                </ListGroup.Item>
              </ListGroup>
            </Col>
              <Col sm={10}>
                <Tab.Content>
                  <Tab.Pane eventKey={'#'+key}>
                  <ProductsOfWishlist key={wish.id} products={wish.products}  wishlistname={wish.name} />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              </React.Fragment>
            )
            }
            </Row>
      </Tab.Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.wishlist.loading,
    arrayWishlist: state.wishlist.arrayWishlist,
    savedwishlist: state.wishlist.savedwishlist,
  };
};
const Wishlist = connect(mapStateToProps, { saveWishlist, listWishlist })(WishlistComponent);

export default Wishlist;