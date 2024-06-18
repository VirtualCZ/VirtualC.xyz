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
  let aboutSection = useRef(null);
  let projectsSection = useRef(null);
  let contactSection = useRef(null);

  // Create refs for the circular-blur spans
  const homeBlurRef = useRef(null);
  const aboutBlurRef = useRef(null);
  const projectsBlurRef = useRef(null);
  const contactBlurRef = useRef(null);

  // Callback function to set styles for the circular-blur spans
  const setCircularBlurStyles = () => {
    const homeRect = homeSection.current.getBoundingClientRect();
    if (homeSection.current) {
      homeBlurRef.current.style.width = `${homeRect.width}px`;
      homeBlurRef.current.style.height = `${homeRect.height}px`;
      homeBlurRef.current.style.top = `${homeSection.current.offsetTop}px`;
      homeBlurRef.current.style.left = `${homeRect.left}px`;
    }
    if (contactSection.current && homeRect) {
      const contactRect = contactSection.current.getBoundingClientRect();
      contactBlurRef.current.style.width = `${homeRect.width}px`;
      contactBlurRef.current.style.height = `${homeRect.height}px`;
      contactBlurRef.current.style.top = `${contactSection.current.offsetTop + contactRect.height - homeRect.height}px`;
      contactBlurRef.current.style.left = `${contactRect.left}px`;
    }
  };

  useEffect(() => {

    const handleResize = () => {
      // Access the ref of Home component and set styles for the span
      setCircularBlurStyles();
    };

    window.onload = () => {
      // Access the ref of Home component and set styles for the span
      handleResize()
    };
    // Function to handle window resize

    // Initial setup on component mount
    setCircularBlurStyles();
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [homeSection, contactSection]);

  return (
    <>
      <div className='noise'></div>
      <div className='circular-blur-1' ref={homeBlurRef}></div>
      <div className='circular-blur-1' ref={aboutBlurRef}></div>
      <div className='circular-blur-1' ref={projectsBlurRef}></div>
      <div className='circular-blur-4' ref={contactBlurRef}></div>
      <Container>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <HomePage
                homeSection={homeSection}
                aboutSection={aboutSection}
                projectsSection={projectsSection}
                contactSection={contactSection}
              />
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
