import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import  Button  from 'react-bootstrap/Button';

function NavbarFF() {
  const { t, i18n } = useTranslation();

  return (
      <Navbar
        className='rounded-pill container navbar-fixed-top text-uppercase'
        variant='dark'
        expand='md'
      >
        <Navbar.Brand href='#'>VirtualC</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto align-items-center'>
            <Nav.Link href='#top'>Home</Nav.Link>
            <Nav.Link href='#about'>About me</Nav.Link>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            <Nav.Link href='#contact'>Contact me</Nav.Link>
            <Nav.Link href='#contact'><Button variant='secondary'>Hire Me</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavbarFF;
