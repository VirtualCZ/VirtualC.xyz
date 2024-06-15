import './App.css'

import React, { useRef, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Route, Routes } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from './elements/Navbar';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import Footer from './sections/Footer';

Amplify.configure(awsExports);

function App() {

  let homeSection = useRef(null);

  // Create a ref for the circular-blur span
  const circularBlurRef = useRef(null);

  // Callback function to set styles for the circular-blur span
  const setCircularBlurStyles = (ref) => {
    if (ref) {
      const Rect = ref.getBoundingClientRect();
      circularBlurRef.current.style.width = `${Rect.width}px`;
      circularBlurRef.current.style.height = `${Rect.height}px`;
      circularBlurRef.current.style.top = `calc(${Rect.top}px - 2rem)`;
      circularBlurRef.current.style.left = `${Rect.left}px`;
    }
  };

  useEffect(() => {

    const handleResize = () => {
      // Access the ref of Home component and set styles for the span
      setCircularBlurStyles(homeSection.current);
    };

    window.onload = () => {
      // Access the ref of Home component and set styles for the span
      handleResize()
    };
    // Function to handle window resize

    // Initial setup on component mount
    setCircularBlurStyles(homeSection.current);
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='noise'></div>
      <div className='circlular-blur' ref={circularBlurRef}></div>
      <Container>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <HomePage homeSection={homeSection} />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer/>
      </Container>
    </>
  );
};

export default App
