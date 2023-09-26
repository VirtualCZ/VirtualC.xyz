import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
  
import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Route, Routes } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from './elements/navbar/Navbar';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';

Amplify.configure(awsExports);

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <HomePage />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};

export default App
