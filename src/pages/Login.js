import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth_actions";
import { Row, Form, Col, Button, Container } from 'react-bootstrap';
const Login = ({ login, isAuthenticated }) => {
  const [loginData, SetLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const onChange = (e) =>
    SetLoginData({ ...loginData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/sample" />;
  }

  return (
    <Container style={{ marginTop: '10%' }} >
      <Row>
        <Col className="row d-sm-flex text-center" md={{ span: 6, offset: 3 }} style={{ boxShadow: ' 10px 10px 20px grey  ' }}>
          <Form onSubmit={(e) => onSubmit(e)} >
            <h2 className="mb-4 mt-4">Sign In to your account</h2>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Control type="email" name="email" placeholder="Your email here" onChange={(e) => onChange(e)} />
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
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);