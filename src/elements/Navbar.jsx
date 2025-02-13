import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function CustomNavbar() {
  const { t, i18n } = useTranslation();

  return (
    <Navbar
      className='rounded-pill container navbar-fixed-top text-uppercase'
      variant='dark'
      expand='lg'
    >
      <Navbar.Brand href='#'>VirtualC</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto align-items-center'>
          <Nav.Link href='/#top'>{t('navbar.home')}</Nav.Link>
          <Nav.Link href='/#about'>{t('navbar.about')}</Nav.Link>
          <Nav.Link href='/#projects'>{t('navbar.projects')}</Nav.Link>
          <Nav.Link href='/#contact'>{t('navbar.contact')}</Nav.Link>
          <Nav.Link href='/#contact'>
            <Button variant='secondary'>{t('navbar.hireMe')}</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
