import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth_actions';
import { Navbar ,Container,Nav} from 'react-bootstrap';
import './style.css';


const NavBar = ({ isAuthenticated, logout }) => {
  const authProtectedRoutes = (
    <Fragment>
      <li>
        <Nav.Link as={Link} to="/wishlist" >Wishlist</Nav.Link>
      </li>
      <li>
        <Nav.Link as={Link} to="/product" >Product</Nav.Link>
      </li>
      <li className="ml-auto">
        <Nav.Link as={Link} to="/login"  onClick={logout} className='menu_droite' >Logout</Nav.Link>
      </li>
    </Fragment>
  )

  const publicRoutes = (
    <Fragment className='menu_droite'>
      <li>
        <Nav.Link as={Link} to="/login" >Log In</Nav.Link>
      </li>
      <li>
        <Nav.Link as={Link} to="/register" >Register</Nav.Link>
      </li>
    </Fragment>
  );

  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/welcome" style={{color:'#F9A826'}} >Astrolab Wishlists</Navbar.Brand>
    <Nav className="me-auto">
        <Fragment>
            {isAuthenticated ? authProtectedRoutes : publicRoutes}
        </Fragment>
    </Nav>
    </Container>
  </Navbar>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { logout })(NavBar);
