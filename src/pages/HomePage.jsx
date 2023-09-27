import { useTranslation } from 'react-i18next';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Home from '../sections/Home';
import Projects from '../sections/Projects';
import { useRef } from 'react';

const HomePage = props => {
  let { homeSection } = props;

  const { t } = useTranslation();
  document.title = `${t('navigation.home')} - VirtualC`;

  return (
    <>
      <Home homeSection={homeSection} />
      <About />
      <Projects />
      <Contact />
    </>
  );
};
export default HomePage;
