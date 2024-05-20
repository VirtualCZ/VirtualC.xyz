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
import ghLogo from '../assets/logos/gh_logo.svg';
import igLogo from '../assets/logos/ig_logo.svg';

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
        <Row>
          <Col lg={7}>
            <Card body>
              <Stack gap={2}>
                <AccentTextCard>About me</AccentTextCard>
                <p className='ntmy'>NICE TO MEET YOU, I'M TOMÁŠ</p>
                <p>I'm A Web Developer Based In Czechia. I'm Mainly A Front End Web And App Developer</p>
                <Stack gap={3}>
                  <Row>
                    <Col lg={6}>
                      <IconCard gradientCol="primary" src={ghLogo}>My GitHub Account</IconCard>
                    </Col>
                    <Col lg={6}>
                      <IconCard gradientCol="secondary" src={igLogo}>My Instagram Account</IconCard>
                    </Col>
                  </Row>
                  <IconCard gradientCol="danger" src={ghLogo}>My GitHub Account</IconCard>
                </Stack>
              </Stack>
            </Card>
          </Col>
          <Col lg={5}>
            <ImageCard src={MyPhoto} />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <h2 className='mt-4'>I Have Acquired Following Certificates:</h2>
          </Col>
        </Row>
        <Row>
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
              <Row>
                <Col lg={4}>
                  <IconCard src="">Figma</IconCard>
                </Col>
                <Col lg={4}>
                  <IconCard src="">Color Hunt</IconCard>
                </Col>
                <Col lg={4}>
                  <IconCard src="">PowerToys</IconCard>
                </Col>
              </Row>
            </div>
          </Stack>
        </Card>
        <Row>
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
                <Row>
                  <Col lg={6}>
                    <IconCard />
                  </Col>
                  <Col lg={6}>
                    <IconCard />
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <IconCard />
                  </Col>
                  <Col lg={6}>
                    <IconCard />
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <IconCard />
                  </Col>
                  <Col lg={6}>
                    <IconCard />
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
              <Row>
                <Col lg={4}>
                  <IconCard src="">React Native</IconCard>
                </Col>
                <Col lg={4}>
                  <IconCard src="">Native Base</IconCard>
                </Col>
                <Col lg={4}>
                  <IconCard src="">React StyleSheet</IconCard>
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
