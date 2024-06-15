import { useTranslation } from 'react-i18next';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import ProjectDescription from '../elements/ProjectDescription';

import NicCalc from "../assets/project-imgs/niccalc.jpg"
import ghLogo from '../assets/logos/wh_gh_logo.svg';
import xdLogo from '../assets/logos/wh_xd_logo.svg';
import globeLogo from '../assets/logos/wh_globe_logo.svg';
import ImageCard from '../elements/ImageCard';

const Projects = ({ projectsSection }) => {
  const { t } = useTranslation();
  var webcount = 0
  const webProjectsArr = [
    {
      name: "NicCalc",
      text: "Introducing NicCalc, a comprehensive e-liquid mixing calculator built with JavaScript and ReactJS. NicCalc allows users to effortlessly create customized e-liquid blends by selecting desired VG/PG ratios, aroma content percentage, ice level, and nicotine content. Additional features include cost calculation and profit margin options. NicCalc is a holistic solution for both hobbyists and professionals in the e-liquid industry. Developed using React Hooks and custom CSS, this intuitive and versatile calculator offers a seamless user experience, making e-liquid mixing a breeze.",
      icons: [{ image: ghLogo, text: "GitHub", link: "https://github.com/VirtualCZ/VirtualC.xyz/tree/remake" }, { image: xdLogo, text: "Adobe XD" }, { image: globeLogo, text: "Visit", link: "https://www.virtualc.xyz" }],
      image: NicCalc,
    },
    {
      name: "VirtualC.xyz",
      text: "Introducing NicCalc, A Comprehensive E-liquid Mixing Calculator Built With JavaScript/ReactJS. NicCalc Empowers Users To Effortlessly Create Customized E-liquid Blends By Selecting The Desired VG/PG Ratios, Aroma Content Percentage, Ice Level And Nicotine Content With Additional Features Like Cost Calculation And Profit Margin Options. NicCalc Provides A Holistic Solution For Both Hobbyists And Professionals In The E-liquid Industry. Developed Using React Hooks And Custom CSS , This Intuitive And Versatile Calculate Offers A Seamless User Experience . Making E-liquid Mixing A Breeze",
      icons: [{ image: ghLogo, text: "GitHub", link: "https://github.com/VirtualCZ/VirtualC.xyz" }, { image: xdLogo, text: "Adobe XD" }, { image: globeLogo, text: "Visit", link: "https://dev.virtualc.xyz" }],
      image: NicCalc,
    },
    {
      name: "Old VirtualC.xyz",
      text: "Introducing NicCalc, A Comprehensive E-liquid Mixing Calculator Built With JavaScript/ReactJS. NicCalc Empowers Users To Effortlessly Create Customized E-liquid Blends By Selecting The Desired VG/PG Ratios, Aroma Content Percentage, Ice Level And Nicotine Content With Additional Features Like Cost Calculation And Profit Margin Options. NicCalc Provides A Holistic Solution For Both Hobbyists And Professionals In The E-liquid Industry. Developed Using React Hooks And Custom CSS , This Intuitive And Versatile Calculate Offers A Seamless User Experience . Making E-liquid Mixing A Breeze",
      icons: [{ image: ghLogo, text: "GitHub", link: "https://github.com/VirtualCZ/VirtualC.xyz/tree/niccalc" }, { image: xdLogo, text: "Adobe XD" }, { image: globeLogo, text: "Visit", link: "https://virtualc.xyz/niccalc" }],
      image: NicCalc,
    },
    {
      name: "Shrt VirtualC.xyz",
      text: "Introducing NicCalc, A Comprehensive E-liquid Mixing Calculator Built With JavaScript/ReactJS. NicCalc Empowers Users To Effortlessly Create Customized E-liquid Blends By Selecting The Desired VG/PG Ratios, Aroma Content Percentage, Ice Level And Nicotine Content With Additional Features Like Cost Calculation And Profit Margin Options. NicCalc Provides A Holistic Solution For Both Hobbyists And Professionals In The E-liquid Industry. Developed Using React Hooks And Custom CSS , This Intuitive And Versatile Calculate Offers A Seamless User Experience . Making E-liquid Mixing A Breeze",
      icons: [{ image: ghLogo, text: "GitHub", link: "https://github.com/VirtualCZ/VirtualC.xyz/tree/niccalc" }, { image: xdLogo, text: "Adobe XD" }, { image: globeLogo, text: "Visit", link: "https://virtualc.xyz/niccalc" }],
      image: NicCalc,
    }
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
