import { useTranslation } from 'react-i18next';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Home from '../sections/Home';
import Projects from '../sections/Projects';
import { useRef } from 'react';

const HomePage = props => {
  let { homeSection, aboutSection, projectsSection, contactSection } = props;

  const { t } = useTranslation();
  document.title = "VirtualC";

  return (
    <>
      <Home homeSection={homeSection} />
      <About aboutSection={aboutSection} />
      <Projects projectsSection={projectsSection} />
      <Contact contactSection={contactSection} />
    </>
  );
};
export default HomePage;
