import React, { useState, useEffect } from 'react';
import { useModal } from 'react-hooks-use-modal'
import { Row, Form, Col, Button, ListGroup, Tab } from 'react-bootstrap';
import './style.css'
import { connect } from 'react-redux';
import { saveProduct, listProduct } from '../actions/product_actions';
import { listWishlist } from '../actions/wishlist_actions'

import ProductInfo from './productInfo.component';

const ProductComponent = ({ saveProduct, listProduct, arrayProduct, listWishlist, arrayWishlist }) => {
  var id = localStorage.getItem('id_user');
  var removeFirstChar = id.slice(1);
  var id_user = removeFirstChar.slice(0, removeFirstChar.length - 1);
  useEffect(() => {
    listProduct(id_user);
    listWishlist(id_user);
  }, []);
  const [Modal, open, close] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });

  const [ProductData, SetProductData] = useState({
    name: '',
    price: '',
    currency: '',
    description: '',
    id_wishlist: '',
    id_user: '',
    statut: '',
    photo: '',
  });
  const { name, price, currency, id_wishlist,  statut, photo, description } = ProductData;

  const onChange = (e) =>
    SetProductData({ ...ProductData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    try {
      e.preventDefault();


      saveProduct(name, price, currency, description, id_wishlist, id_user, statut, photo);
    } catch (err) {
      console.error(err)
    }
  };
  return (
    <div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#0">
        <Row>
          <Col sm={2} className='mt-2 border border-bottom-0  border-top-0  '>
            <Button className='m-1' variant="outline-warning" onClick={open} > Add Product  <span>  </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
              </svg>
            </Button>

            <Modal >
              <div style={{ width: '400px', }} className='bg-white p-4 m-4  text-center' >
                <Form onSubmit={(e) => onSubmit(e)} >
                  <h4 className="mb-4 mt-4">Add Product</h4> <hr />
                  <Form.Group as={Row} className="mb-3" >
                    <Col sm={5} >
                      <Form.Control className="mb-3" type="text" name="name" placeholder="Name of product" onChange={(e) => onChange(e)} />
                    </Col>
                    <Col sm={7} >
                      <Form.Control name="photo" type="file" onChange={(e) => onChange(e)} />
                    </Col>
                    <Col sm={8} >
                      <Form.Control className="mb-3" type="number" name="price" placeholder="Price" onChange={(e) => onChange(e)} />
                    </Col>
                    <Col sm={4}>
                      <Form.Select name="currency"  className="mb-3" onChange={(e) => onChange(e)} >
                        <option  value={"Euro"}>Euro</option>
                        <option  value={"Dt"}>Dt </option>
                        <option  value={"$"}>$</option>
                        <option  value={"TL"}>TL</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select name="statut" className="mb-3" onChange={(e) => onChange(e)} >
                        <option  value={"To Buy"}>To Buy </option>
                        <option  value={"Bought"}>Bought </option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select name="id_wishlist" className="mb-3"  onChange={(e) => onChange(e)} >
                        {arrayWishlist?.data?.map((wish) =>
                          <option  value={wish._id}>{wish.name} </option>
                        )}
                      </Form.Select>
                    </Col>
                    <Col sm={12}>
                    <Form.Control as="textarea" className="mb-3" placeholder="Description ...." rows={3} onChange={(e) => onChange(e)} name="description"/>
                    </Col>
                  </Form.Group>
                  <Button variant="dark" type="submit" className="mt-2 "  >Save</Button>{' '}
                  <Button variant="secondary" onClick={close} className="mt-2 "  >Close</Button>{' '}
                </Form>
              </div>
            </Modal>
          </Col>
        </Row>
        <Row >
          {arrayProduct?.data?.map((prod, key) =>
            <React.Fragment  >
              <Col sm={2} className='border border-bottom-0  border-top-0  ' >
                <ListGroup className='mt-1 '  >
                  <ListGroup.Item className='menu' href={'#' + key} >
                    {prod.name}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={10}>
                <Tab.Content>
                  <Tab.Pane eventKey={'#' + key}>
                    <ProductInfo key={prod.id} product={prod} />
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
    loading: state.product.loading,
    arrayProduct: state.product.arrayProduct,
    savedProduct: state.product.savedProduct,
    arrayWishlist: state.wishlist.arrayWishlist,

  };
};
const Product = connect(mapStateToProps, { saveProduct, listProduct, listWishlist })(ProductComponent);
export default Product