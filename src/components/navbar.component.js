import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth_actions';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';


const NavBar = ({ isAuthenticated, logout }) => {
  const authProtectedRoutes = (
    <Fragment>

      <li>
        <span style={{ float: 'left' }} >
          <Nav.Link as={Link} to="/wishlist" >Wishlist</Nav.Link>
        </span>
      </li>
      <li>
        <span style={{ float: 'left' }} >
          <Nav.Link as={Link} to="/product">Product</Nav.Link>
        </span>

      </li>


      <li className="ml-auto" className='menu_droite'  >
        <Nav.Link as={Link} to="/login" onClick={logout}  >
          <Badge bg="warning"className='p-2 text-dark'>Logout</Badge>{' '}
        </Nav.Link>
      </li>
    </Fragment>
  )

  const publicRoutes = (
    <Fragment >
      <li className='menu_droite'>
        <Nav.Link as={Link} to="/login" >Log In</Nav.Link>
      </li>
      <li className='menu_droite'>
        <Nav.Link as={Link} to="/register" >Register</Nav.Link>
      </li>
    </Fragment>
  );

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/welcome" style={{ color: '#F9A826' }} >Astrolab Wishlists</Navbar.Brand>
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
