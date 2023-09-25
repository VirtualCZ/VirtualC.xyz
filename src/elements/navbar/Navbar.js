import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function NavbarFF() {
  const { t, i18n } = useTranslation();

  return (
    <Navbar
      className='m-3 px-3 rounded'
      variant='dark'
      bg='primary'
      expand='md'
      fixed='top'
    >
      <Navbar.Brand href='#'>VirtualC</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          <Nav.Link href='#top'>Home</Nav.Link>
          <Nav.Link href='#about'>About me</Nav.Link>
          <Nav.Link href='#projects'>Projects</Nav.Link>
          <Nav.Link href='#contact'>Contact me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarFF;
