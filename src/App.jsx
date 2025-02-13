import './App.css'

import { useRef, useEffect } from 'react';
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
  const projectsBlurRef = useRef(null);
  const contactBlurRef = useRef(null);


  const updateBlurs = () => {
    const offsetTop = 0; // 40px offset from the top of the page

    // Home Blur: Match homeSection size and position
    if (homeBlurRef.current && homeSection.current) {
      const homeRect = homeSection.current.getBoundingClientRect();
      homeBlurRef.current.style.width = `${homeRect.width}px`;
      homeBlurRef.current.style.height = `${homeRect.height}px`;
      homeBlurRef.current.style.top = `${homeSection.current.offsetTop - offsetTop}px`;
      homeBlurRef.current.style.left = `${homeSection.current.offsetLeft}px`;
    }

    // Projects Blur: Use homeSection size, positioned at the top of the projectsSection
    if (projectsBlurRef.current && homeSection.current && projectsSection.current) {
      const homeRect = homeSection.current.getBoundingClientRect();

      // Use homeSection proportions
      projectsBlurRef.current.style.width = `${homeRect.width}px`;
      projectsBlurRef.current.style.height = `${homeRect.height}px`;

      // Position at the top of the projectsSection, accounting for offset
      projectsBlurRef.current.style.top = `${projectsSection.current.offsetTop - offsetTop}px`;
      projectsBlurRef.current.style.left = `${homeSection.current.offsetLeft}px`;
    }

    // Contact Blur: Use homeSection size, positioned at the bottom of the projectsSection
    if (contactBlurRef.current && homeSection.current && projectsSection.current) {
      const homeRect = homeSection.current.getBoundingClientRect();

      // Use homeSection proportions
      contactBlurRef.current.style.width = `${homeRect.width}px`;
      contactBlurRef.current.style.height = `${homeRect.height}px`;

      // Position at the bottom of the projectsSection, accounting for offset
      contactBlurRef.current.style.top = `${
        projectsSection.current.offsetTop +
        projectsSection.current.offsetHeight -
        homeRect.height -
        offsetTop
      }px`;
      contactBlurRef.current.style.left = `${homeSection.current.offsetLeft}px`;
    }
  };

  useEffect(() => {
    // Delay the initial call to ensure the DOM is fully rendered
    const timeoutId = setTimeout(() => {
      updateBlurs();
    }, 100); // 100ms delay

     // Add the fade-in class to the blur elements
    if (homeBlurRef.current) homeBlurRef.current.classList.add('fade-in');
    if (projectsBlurRef.current) projectsBlurRef.current.classList.add('fade-in');
    if (contactBlurRef.current) contactBlurRef.current.classList.add('fade-in');

     // Remove the fade-in class after the animation completes
     const animationDuration = 1000; // 1s, matching the SASS animation duration
     const removeFadeInClass = () => {
       if (homeBlurRef.current) homeBlurRef.current.classList.remove('fade-in');
       if (projectsBlurRef.current) projectsBlurRef.current.classList.remove('fade-in');
       if (contactBlurRef.current) contactBlurRef.current.classList.remove('fade-in');
     };
     const removeTimeoutId = setTimeout(removeFadeInClass, animationDuration);

    // Update blurs on window resize
    const handleResize = () => {
      updateBlurs();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(removeTimeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='noise'></div>
      <div className='circular-blur-1' ref={homeBlurRef}></div>
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
}

export default App
