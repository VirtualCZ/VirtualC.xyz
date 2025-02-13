import React from 'react';
import { useTranslation } from 'react-i18next';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import ProjectDescription from '../elements/ProjectDescription';

import NicCalc from "../assets/project-imgs/niccalc.jpg"
import VirtualCxyz from "../assets/project-imgs/virtualcxyz.png"
import TicketCalculator from "../assets/project-imgs/ticketcalculator.png"
import oldVirtualCxyz from "../assets/project-imgs/oldvirtualcxyz.png"
import figmaLogo from '../assets/logos/wh_figma_logo.svg';
import ghLogo from '../assets/logos/wh_gh_logo.svg';
import xdLogo from '../assets/logos/wh_xd_logo.svg';
import globeLogo from '../assets/logos/wh_globe_logo.svg';
import ImageCard from '../elements/ImageCard';

const Projects = ({ projectsSection }) => {
  const { t } = useTranslation();
  var webcount = 0
  const webProjectsArr = [
    {
      name: "VirtualC.xyz",
      text: "Welcome to VirtualC.xyz, my personal portfolio showcasing advanced web technologies and modern design. Built with ReactJS, this site features a responsive layout using Bootstrap and React Bootstrap, with custom styles crafted in SASS. Dynamic content is displayed with react-multi-carousel, and EmailJS handles email functionalities. Hosted securely on AWS, the site supports multiple languages through react-i18next. The glass design was created by Fiverr designer @usamach579, with the functional implementation by me.",
      icons: [
        { image: ghLogo, text: "GitHub", link: "https://github.com/VirtualCZ/VirtualC.xyz" },
        { image: figmaLogo, text: "Figma", link: "https://www.figma.com/design/Cmee24TyGDnX3BuSmGVRVy/TOMAS-GABRIEL-PORTFOLIO?node-id=0-1&t=f6nS8yRtdLO5dsql-0" },
        { image: globeLogo, text: "Visit", link: "https://www.virtualc.xyz/" }
      ],
      image: VirtualCxyz,
    },
    {
      name: "Old VirtualC.xyz",
      text: "Explore old.virtualc.xyz, a dynamic web platform designed to showcase the functionality of various elements. Built using ReactJS with a custom Windows 11-inspired design, the site incorporates Bootstrap and Tailwind CSS for a responsive interface that adapts seamlessly across different devices. Navigation is enhanced with React Router for smooth transitions between pages. Hosted securely on Amazon Web Services (AWS), this project includes internationalization support through react-i18next and allows users to customize their experience with theme switching options.",
      icons: [
        { image: ghLogo, text: "GitHub", link: "https://github.com/VirtualCZ/VirtualC.xyz" },
        { image: xdLogo, text: "Adobe XD" },
        { image: globeLogo, text: "Visit", link: "https://old.virtualc.xyz" }
      ],
      image: oldVirtualCxyz,
    },
    {
      name: "Ticket calculator",
      text: "A ReactJS application built with DaisyUI for quick ticket price calculations. Add custom ticket types with prices in CZK and EUR, then calculate large ticket sales easily. The UI features a currency selector, fields for money received, number of tickets, type selection, total price, and change calculation. You can also clear inputs and manage ticket types (edit, delete, add).",
      icons: [
        { image: ghLogo, text: "GitHub", link: "https://github.com/VirtualCZ/TicketCalc" },
        // { image: xdLogo, text: "Adobe XD" },
        { image: globeLogo, text: "Visit", link: "https://ticket.virtualc.xyz/" }
      ],
      image: TicketCalculator,
    },
    {
      name: "NicCalc",
      text: "Discover NicCalc, a robust e-liquid mixing calculator crafted with JavaScript and ReactJS. This intuitive tool empowers users to create personalized e-liquid blends effortlessly. Customize VG/PG ratios, aroma percentages, ice levels, and nicotine content with ease. NicCalc also features cost estimation and profit margin settings, catering to hobbyists and industry professionals alike. Developed with React Hooks and custom CSS, NicCalc ensures a seamless user experience for streamlined e-liquid mixing.",
      icons: [
        { image: ghLogo, text: "GitHub", link: "https://github.com/VirtualCZ/VirtualC.xyz/tree/niccalc" },
        { image: xdLogo, text: "Adobe XD" },
        { image: globeLogo, text: "Visit", link: "https://niccalc.virtualc.xyz/" }
      ],
      image: NicCalc,
    },
  ]

  return (
    <section
      id='projects'
      // style={{ paddingTop: '109px' }}
      className='d-flex flex-column'
      ref={projectsSection}
    >
      <Stack gap={3}>
        <h1>WEB PROJECTS</h1>

        {webProjectsArr.map((w) => {
          webcount++
          if (webcount % 2) {
            return (
              <React.Fragment key={webcount}>

                <Row className='d-none d-lg-flex'>
                  <ProjectDescription w={w} />
                  <Col md={12} lg={5}>
                    <ImageCard imgClass="h-100" src={w.image} />
                  </Col>
                </Row>

                <Row className='d-flex d-lg-none'>
                  <ProjectDescription className='rounded-bottom-0' w={w} />
                  <Col md={12} lg={5}>
                    <ImageCard className='rounded-top-0' src={w.image} />
                  </Col>
                </Row>

              </React.Fragment>
            )
          }
          else {
            return (
              <React.Fragment key={webcount}>

                <Row className='d-none d-lg-flex'>
                  <Col md={12} lg={5}>
                    <ImageCard imgClass="h-100" src={w.image} />
                  </Col>
                  <ProjectDescription w={w} />
                </Row>

                <Row className='d-flex d-lg-none'>
                  <Col md={12} lg={5}>
                    <ImageCard className='rounded-bottom-0' src={w.image} />
                  </Col>
                  <ProjectDescription className='rounded-top-0' w={w} />
                </Row>

              </React.Fragment>
            )
          }
        })
        }
      </Stack>
    </section>
  );
};

export default Projects;
