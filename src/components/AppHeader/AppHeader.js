import PropTypes from 'prop-types';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const AppHeader = ({ siteTitle }) => (
  <Navbar bg='light' expand='lg'>
    <Container>
      <Navbar.Brand href='/'>BANKSY</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
        <Nav>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/biography'>Biography</Nav.Link>
          <Nav.Link href='/gallery'>Gallery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

AppHeader.propTypes = {
  siteTitle: PropTypes.string,
};

AppHeader.defaultProps = {
  siteTitle: ``,
};

export default AppHeader;
