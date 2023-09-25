


import './default.css';

import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Route, Routes } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import NotFound from './pages/NotFound';
import Navbar from './elements/navbar/Navbar';
import HomePage from './pages/HomePage';

Amplify.configure(awsExports);

const App = () => {
  const [checked, setChecked] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  const toggleChecked = () => {
    setChecked(!checked);
  };

  // useEffect(() => {
  //   const themeHref = document.getElementById('theme-style');
  //   if (checked) {
  //     themeHref.setAttribute('href', 'themes/dark-mode.sass');
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     themeHref.setAttribute('href', 'themes/light-mode.sass');
  //     localStorage.setItem('theme', 'light');
  //   }
  // }, [checked]);

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route
            path='/'
            element={
              <HomePage checked={checked} toggleChecked={toggleChecked} />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
