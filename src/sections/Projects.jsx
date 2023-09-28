import { useEffect, useState } from 'react';

import { API } from 'aws-amplify';
import { useTranslation } from 'react-i18next';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { ProjectDescription, ProjectImage } from '../elements/navbar/Project';

const Projects = () => {
  const { t } = useTranslation();
  document.title = `${t('navigation.components')} - VirtualC`;
  let webcount = 0
  const webProjectsArr = [
    {
      name: "NicCalc",
      text: "Introducing NicCalc, A Comprehensive E-liquid Mixing Calculator Built With JavaScript/ReactJS. NicCalc Empowers Users To Effortlessly Create Customized E-liquid Blends By Selecting The Desired VG/PG Ratios, Aroma Content Percentage, Ice Level And Nicotine Content With Additional Features Like Cost Calculation And Profit Margin Options. NicCalc Provides A Holistic Solution For Both Hobbyists And Professionals In The E-liquid Industry. Developed Using React Hooks And Custom CSS , This Intuitive And Versatile Calculate Offers A Seamless User Experience . Making E-liquid Mixing A Breeze",
      icons: [{ image: "img", text: "text" }, { image: "img", text: "text" }, { image: "img", text: "text" }],
      image: "swag",
    },
    {
      name: "NicCalc",
      text: "Introducing NicCalc, A Comprehensive E-liquid Mixing Calculator Built With JavaScript/ReactJS. NicCalc Empowers Users To Effortlessly Create Customized E-liquid Blends By Selecting The Desired VG/PG Ratios, Aroma Content Percentage, Ice Level And Nicotine Content With Additional Features Like Cost Calculation And Profit Margin Options. NicCalc Provides A Holistic Solution For Both Hobbyists And Professionals In The E-liquid Industry. Developed Using React Hooks And Custom CSS , This Intuitive And Versatile Calculate Offers A Seamless User Experience . Making E-liquid Mixing A Breeze",
      icons: [{ image: "img", text: "text" }, { image: "img", text: "text" }, { image: "img", text: "text" }],
      image: "swag",
    },
    {
      name: "NicCalc",
      text: "Introducing NicCalc, A Comprehensive E-liquid Mixing Calculator Built With JavaScript/ReactJS. NicCalc Empowers Users To Effortlessly Create Customized E-liquid Blends By Selecting The Desired VG/PG Ratios, Aroma Content Percentage, Ice Level And Nicotine Content With Additional Features Like Cost Calculation And Profit Margin Options. NicCalc Provides A Holistic Solution For Both Hobbyists And Professionals In The E-liquid Industry. Developed Using React Hooks And Custom CSS , This Intuitive And Versatile Calculate Offers A Seamless User Experience . Making E-liquid Mixing A Breeze",
      icons: [{ image: "img", text: "text" }, { image: "img", text: "text" }, { image: "img", text: "text" }],
      image: "swag",
    },
  ]

  return (
    <section
      id='projects'
      style={{ paddingTop: '109px' }}
      className='d-flex flex-column'
    >
      <Stack gap={3}>
        <Card body style={{ maxWidth: 'fit-content' }}>
          <h2>Web projects</h2>
        </Card>

        {webProjectsArr.map((w) => {
          webcount++
          if (webcount % 2) {
            return (
              <Row>
                <ProjectDescription w={w} />
                <ProjectImage w={w} />
              </Row>
            )
          }
          else {
            return (
              <Row>
                <ProjectImage w={w} />
                <ProjectDescription w={w} />
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
