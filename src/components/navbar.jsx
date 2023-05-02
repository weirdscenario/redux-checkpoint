import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../App.css'
import { ShoppingCart } from 'phosphor-react';
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Your Shop</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link  > <Link to='/'  className='links home'>Home</Link></Nav.Link>
        <Nav.Link  ><Link to='/Cart' className='links cart'><ShoppingCart size={32}/></Link> </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header
