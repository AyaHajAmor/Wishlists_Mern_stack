import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions/auth_actions';
import { Row, Form, Col, Button, Container } from 'react-bootstrap';

const Signup = ({ register, check_authenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [signupData, SetSignupData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    picture: '',
  });

  const { name, email, password, phone, picture } = signupData;

  const onChange = (e) =>
    SetSignupData({ ...signupData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    register(name, email, password, phone, picture);
    setAccountCreated(true);
  };

  if (check_authenticated) {
    return <Redirect to="/wishlist" />;
  }

  if (accountCreated) {
    return <Redirect to="/login" />;
  }

  return (
<Container style={{ marginTop: '10%' }} >
      <Row>
        <Col className="row d-sm-flex text-center" md={{ span: 6, offset: 3 }} style={{ boxShadow: ' 10px 10px 20px grey  ' }}>
          <Form onSubmit={(e) => onSubmit(e)} >
            <h2 className="mb-4 mt-4">Sign Up to your account</h2>
            <Form.Group as={Row} className="mb-3" >
              <Form.Control type="text" name="name" placeholder="Your name here" onChange={(e) => onChange(e)} />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Control type="email" name="email" placeholder="Your email here" onChange={(e) => onChange(e)} />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
              <Form.Control type="number" name="phone" placeholder="Your phone here" onChange={(e) => onChange(e)} />
            </Form.Group>
            <Form.Group controlId="formFileSm" as={Row} className="mb-3">
                <Form.Control type="file" />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Control name="password" type="password" placeholder="Your password here" onChange={(e) => onChange(e)} />
            </Form.Group>
            <Button variant="warning" type="submit" className="mt-2"  >Connecter</Button>{' '}
          </Form>
          <h6 className="mt-4 mb-4" >
            Dont have account?<Link to="/register"> Create Account</Link>
          </h6>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  check_authenticated: state.auth.check_authenticated,
});

export default connect(mapStateToProps, { register })(Signup);