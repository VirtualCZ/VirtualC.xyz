import { useEffect, useState } from 'react';

import { API } from 'aws-amplify';
import { useTranslation } from 'react-i18next';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import ProjectDescription from '../elements/ProjectDescription';

import NicCalc from "../assets/project-imgs/niccalc.jpg"
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
      name: "NicCalc",
      text: "Introducing NicCalc, A Comprehensive E-liquid Mixing Calculator Built With JavaScript/ReactJS. NicCalc Empowers Users To Effortlessly Create Customized E-liquid Blends By Selecting The Desired VG/PG Ratios, Aroma Content Percentage, Ice Level And Nicotine Content With Additional Features Like Cost Calculation And Profit Margin Options. NicCalc Provides A Holistic Solution For Both Hobbyists And Professionals In The E-liquid Industry. Developed Using React Hooks And Custom CSS , This Intuitive And Versatile Calculate Offers A Seamless User Experience . Making E-liquid Mixing A Breeze",
      icons: [{ image: ghLogo, text: "GitHub" }, { image: xdLogo, text: "Adobe XD" }, { image: globeLogo, text: "Visit" }],
      image: NicCalc,
    },
    {
      name: "NicCalc2",
      text: "Introducing NicCalc, A Comprehensive E-liquid Mixing Calculator Built With JavaScript/ReactJS. NicCalc Empowers Users To Effortlessly Create Customized E-liquid Blends By Selecting The Desired VG/PG Ratios, Aroma Content Percentage, Ice Level And Nicotine Content With Additional Features Like Cost Calculation And Profit Margin Options. NicCalc Provides A Holistic Solution For Both Hobbyists And Professionals In The E-liquid Industry. Developed Using React Hooks And Custom CSS , This Intuitive And Versatile Calculate Offers A Seamless User Experience . Making E-liquid Mixing A Breeze",
      icons: [{ image: ghLogo, text: "GitHub" }, { image: xdLogo, text: "Adobe XD" }, { image: globeLogo, text: "Visit" }],
      image: NicCalc,
    },
    {
      name: "NicCalc3",
      text: "Introducing NicCalc, A Comprehensive E-liquid Mixing Calculator Built With JavaScript/ReactJS. NicCalc Empowers Users To Effortlessly Create Customized E-liquid Blends By Selecting The Desired VG/PG Ratios, Aroma Content Percentage, Ice Level And Nicotine Content With Additional Features Like Cost Calculation And Profit Margin Options. NicCalc Provides A Holistic Solution For Both Hobbyists And Professionals In The E-liquid Industry. Developed Using React Hooks And Custom CSS , This Intuitive And Versatile Calculate Offers A Seamless User Experience . Making E-liquid Mixing A Breeze",
      icons: [{ image: ghLogo, text: "GitHub" }, { image: xdLogo, text: "Adobe XD" }, { image: globeLogo, text: "Visit" }],
      image: NicCalc,
    },
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
              <Row key={"row" + webcount + w.name}>
                <ProjectDescription className='rounded-bottom-0' w={w} key={webcount + w.name} />
                <Col lg={12} xl={5}>
                  <ImageCard className='rounded-top-0' src={w.image} />
                </Col>
              </Row>
            )
          }
          else {
            return (
              <Row key={"row" + webcount + w.name}>
                <Col lg={12} xl={5}>
                  <ImageCard className='rounded-bottom-0' src={w.image} />
                </Col>
                <ProjectDescription className='rounded-top-0' w={w} key={webcount + w.name} />
              </Row>
            )
          }
        })
        }
      </Stack>
    </section>
  );
};

export default Projects;
