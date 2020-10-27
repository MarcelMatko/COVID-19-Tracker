import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class NavBar extends React.Component {



  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-4">
        <Navbar.Brand href="/"><img alt="" src="/logo.png" width="150" height="50" className="d-inline-block align-top"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link component={Link} to='/' href='/'>Coronavirus</Nav.Link>
            <Nav.Link component={Link} to='/symptoms' href='/symptoms'>Symptoms</Nav.Link>
            <Nav.Link component={Link} to='/faq' href='/faq'>FAQ</Nav.Link>
            <Nav.Link component={Link} to='/privacy-policy' href='/privacy-policy'>Privacy Policy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }


}