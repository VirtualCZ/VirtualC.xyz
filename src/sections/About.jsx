import { useEffect, useState } from 'react';

import { API } from 'aws-amplify';
import { useTranslation } from 'react-i18next';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import AccentTextCard from '../elements/AccentTextCard';
import ImageCard from '../elements/ImageCard';
import IconCard from '../elements/IconCard';

import MyPhoto from '../assets/myphoto.jpg';
import ghLogo from '../assets/logos/wh_gh_logo.svg';
import igLogo from '../assets/logos/wh_ig_logo.svg';
import linkedinLogo from '../assets/logos/wh_linkedin_logo.svg';

import whReactLogo from '../assets/logos/wh_react_logo.svg';

import xdLogo from '../assets/logos/xd_logo.svg';
import colorHuntLogo from '../assets/logos/colorhunt_logo.svg';
import figmaLogo from '../assets/logos/figma_logo.svg';

import wideAWSLogo from '../assets/logos/wide_aws_logo.svg';
import wideMySQLLogo from '../assets/logos/wide_mysql_logo.svg';
import wideJSLogo from '../assets/logos/wide_js_logo.svg';
import reactLogo from '../assets/logos/react_logo.svg';
import wideTailwindogo from '../assets/logos/wide_tailwind_logo.svg';
import wideBootstrapLogo from '../assets/logos/wide_bootstrap_logo.svg';

const About = () => {
  // const { t } = useTranslation();
  // document.title = `${t('navigation.components')} - VirtualC`;

  return (
    <section
      id='about'
      style={{ paddingTop: '95px' }}
      className='d-flex flex-column mt-5'
    >
      <Stack gap={4}>
        <Row className='row-gap-3'>
          <Col lg={7}>
            <Card>
              <Card.Body className='gap-2 d-flex flex-column' >
                <AccentTextCard>About me</AccentTextCard>
                <p className='ntmy'>NICE TO MEET YOU, I'M TOMÁŠ</p>
                <p>I'm A Web Developer Based In Czechia. I'm Mainly A Front End Web And App Developer</p>
                <Stack gap={3}>
                  <Row className='row-gap-3'>
                    <Col xl={6}>
                      <IconCard link="https://github.com/VirtualCZ" gradientCol="primary" src={ghLogo}>My GitHub Account</IconCard>
                    </Col>
                    <Col xl={6}>
                      <IconCard link="https://www.instagram.com/tomas_v_chill/" gradientCol="secondary" src={igLogo}>My Instagram Account</IconCard>
                    </Col>
                  </Row>
                  <IconCard gradientCol="danger" src={linkedinLogo}>My Linked In Account</IconCard>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={5}>
            <ImageCard imgClass='h-100' className='d-none d-lg-flex' src={MyPhoto} />
            <ImageCard className='d-flex d-lg-none' src={MyPhoto} />
          </Col>
        </Row>
        <h2 className='mt-4'>I Have Acquired Following Certificates:</h2>
        <Row className='row-gap-3'>
          <Col lg={6}>
            <Card className='rounded-pill' body>
              <p className='text-center mb-0 fw-bolder fs-3'>CISCO IT ESSENTIALS</p>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className='rounded-pill' body>
              <p className='text-center mb-0 fw-bolder fs-3'>NDG LINUX ESSENTIALS</p>
            </Card>
          </Col>
        </Row>
        <Card body>
          <Stack gap={3}>
            <AccentTextCard color='danger'>
              Design
            </AccentTextCard>
            <div>
              <p>I Have A Preference For Minimalistic Web Pages But Am Always Open To Exploring New Concept And Styles. The Tools I Commonly Use For Design Include ( List The Design Tools You Use)</p>
              <p className='fw-bolder fs-3 text-primary text-uppercase'>Design tools</p>
              <Row className='row-gap-3'>
                <Col sm={12} lg={4}>
                  <IconCard src={figmaLogo}>Figma</IconCard>
                </Col>
                <Col sm={12} lg={4}>
                  <IconCard src={colorHuntLogo}>Color Hunt</IconCard>
                </Col>
                <Col sm={12} lg={4}>
                  <IconCard src={xdLogo}>PowerToys</IconCard>
                </Col>
              </Row>
            </div>
          </Stack>
        </Card>
        <Row className='row-gap-3'>
          <Col lg={7}>
            <Card body>
              <Stack gap={3}>
                <AccentTextCard color='secondary'>
                  Web Development
                </AccentTextCard>
                <p className="mb-0">
                  I Primarily Use React JS And HTML For Front End Development With Tailwind And Bootstrap For Styling. My Database Of Choice Is MySQL And I'm Learning Amazon's Solutions.
                </p>
                <p>
                  While I'm Less Confident In PHP ( Nette And CodeIgniter ) I Can Still Work Them I Host My Web Projects On Amazon Web Services (AWS)
                </p>
              </Stack>
            </Card>
          </Col>
          <Col lg={5}>
            <Card body>
              <Stack className='fh-web-showcase' gap={3}>
                <Row className='row-gap-3'>
                  <Col xs={6}>
                    <IconCard src={wideAWSLogo} />
                  </Col>
                  <Col xs={6}>
                    <IconCard src={wideMySQLLogo} />
                  </Col>
                </Row>
                <Row className='row-gap-3'>
                  <Col xs={6}>
                    <IconCard src={wideJSLogo} />
                  </Col>
                  <Col xs={6}>
                    <IconCard src={reactLogo} />
                  </Col>
                </Row>
                <Row className='row-gap-3'>
                  <Col xs={6}>
                    <IconCard src={wideTailwindogo} />
                  </Col>
                  <Col xs={6}>
                    <IconCard src={wideBootstrapLogo} />
                  </Col>
                </Row>
              </Stack>
            </Card>
          </Col>
        </Row>
        <Card body>
          <Stack gap={3}>
            <AccentTextCard color='success'>
              Mobile app development
            </AccentTextCard>
            <div>
              <p>
                I Utilize React Native, A Framework Similar To React Native. React Native Enables Me To Create Android And IOS Apps Using A Single Code Base.
              </p>
              <Row className='row-gap-3'>
                <Col lg={4}>
                  <IconCard src={reactLogo}>React Native</IconCard>
                </Col>
                <Col lg={4}>
                  <IconCard src={reactLogo}>Native Base</IconCard>
                </Col>
                <Col lg={4}>
                  <IconCard src={reactLogo}>React StyleSheet</IconCard>
                </Col>
              </Row>
            </div>
          </Stack>
        </Card>
      </Stack>
    </section>
  );
};

export default About;
