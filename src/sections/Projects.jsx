import { useEffect, useState } from 'react';

import { API } from 'aws-amplify';
import { useTranslation } from 'react-i18next';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import ProjectDescription from '../elements/ProjectDescription';

import NicCalc from "../assets/project-imgs/niccalc.jpg"
import figmaLogo from '../assets/logos/wh_figma_logo.svg';
import ghLogo from '../assets/logos/wh_gh_logo.svg';
import xdLogo from '../assets/logos/wh_xd_logo.svg';
import globeLogo from '../assets/logos/wh_globe_logo.svg';
import ImageCard from '../elements/ImageCard';

const Projects = () => {
  const { t } = useTranslation();
  document.title = `${t('navigation.components')} - VirtualC`;
  var webcount = 0
  const webProjectsArr = [
    {
      name: "VirtualC.xyz",
      text: "Welcome to VirtualC.xyz, my personal portfolio showcasing advanced web technologies and modern design. Built with ReactJS, this site features a responsive layout using Bootstrap and React Bootstrap, with custom styles crafted in SASS. Dynamic content is displayed with react-multi-carousel, and EmailJS handles email functionalities. Hosted securely on AWS, the site supports multiple languages through react-i18next. The glass design was created by Fiverr designer @usamach579, with the functional implementation by me.",
      icons: [
        { image: ghLogo, text: "GitHub", link: "https://github.com/VirtualCZ/VirtualC.xyz" },
        { image: figmaLogo, text: "Figma", link: "https://www.figma.com/design/Cmee24TyGDnX3BuSmGVRVy/TOMAS-GABRIEL-PORTFOLIO?node-id=0-1&t=f6nS8yRtdLO5dsql-0" },
        { image: globeLogo, text: "Visit", link: "https://www.virtualc.xyz/niccalc" }
      ],
      image: NicCalc,
    },
    {
      name: "Old VirtualC.xyz",
      text: "Explore old.virtualc.xyz, a dynamic web platform built using ReactJS with a custom Windows 11-inspired design. The site incorporates Bootstrap and Tailwind CSS for a responsive interface that adapts seamlessly across different devices. Navigation is enhanced with React Router for smooth transitions between pages. This project is hosted securely on Amazon Web Services (AWS) and includes internationalization support through react-i18next. Users can customize their experience with theme switching options.",
      icons: [
        { image: ghLogo, text: "GitHub", link: "https://github.com/VirtualCZ/VirtualC.xyz" },
        { image: xdLogo, text: "Adobe XD" },
        { image: globeLogo, text: "Visit", link: "https://old.virtualc.xyz" }
      ],
      image: NicCalc,
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
    {
      name: "Shrt VirtualC.xyz in dev",
      text: "Introducing NicCalc, A Comprehensive E-liquid Mixing Calculator Built With JavaScript/ReactJS. NicCalc Empowers Users To Effortlessly Create Customized E-liquid Blends By Selecting The Desired VG/PG Ratios, Aroma Content Percentage, Ice Level And Nicotine Content With Additional Features Like Cost Calculation And Profit Margin Options. NicCalc Provides A Holistic Solution For Both Hobbyists And Professionals In The E-liquid Industry. Developed Using React Hooks And Custom CSS , This Intuitive And Versatile Calculate Offers A Seamless User Experience . Making E-liquid Mixing A Breeze",
      icons: [
        { image: ghLogo, text: "GitHub update", link: "https://github.com/VirtualCZ/shrt.virtualc.xyz" },
        { image: xdLogo, text: "Adobe XD" },
        { image: globeLogo, text: "Visit", link: "https://shrt.virtualc.xyz/" }
      ],
      image: NicCalc,
    }
  ]

  return (
    <section
      id='projects'
      // style={{ paddingTop: '109px' }}
      className='d-flex flex-column'
    >
      <Stack gap={3}>
        <h1>WEB PROJECTS</h1>

        {webProjectsArr.map((w) => {
          webcount++
          if (webcount % 2) {
            return (
              <>

                <Row className='d-none d-lg-flex' key={"row" + webcount + w.name}>
                  <ProjectDescription w={w} key={webcount + w.name} />
                  <Col md={12} lg={5}>
                    <ImageCard imgClass="h-100" src={w.image} />
                  </Col>
                </Row>

                <Row className='d-flex d-lg-none' key={"row" + webcount + w.name}>
                  <ProjectDescription className='rounded-bottom-0' w={w} key={webcount + w.name} />
                  <Col md={12} lg={5}>
                    <ImageCard className='rounded-top-0' src={w.image} />
                  </Col>
                </Row>

              </>
            )
          }
          else {
            return (
              <>

                <Row className='d-none d-lg-flex' key={"row" + webcount + w.name}>
                  <Col md={12} lg={5}>
                    <ImageCard imgClass="h-100" src={w.image} />
                  </Col>
                  <ProjectDescription w={w} key={webcount + w.name} />
                </Row>

                <Row className='d-flex d-lg-none' key={"row" + webcount + w.name}>
                  <Col md={12} lg={5}>
                    <ImageCard className='rounded-bottom-0' src={w.image} />
                  </Col>
                  <ProjectDescription className='rounded-top-0' w={w} key={webcount + w.name} />
                </Row>

              </>
            )
          }
        })
        }
      </Stack>
    </section>
  );
};

export default Projects;
