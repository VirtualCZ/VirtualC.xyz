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
      style={{ paddingTop: '109px' }}
      className='d-flex flex-column'
    >
      <Stack gap={3}>
        <Row>
          <Col lg={7}>
            <Card body>
              <AccentTextCard>About me</AccentTextCard>
              <h2>NICE TO MEET YOU, I’M TOMÁŠ</h2>
              <p>I’m A Web Developer Based In Czechia. I’m Mainly A Front End Web And App Developer</p>
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
            </Card>
          </Col>
          <Col lg={5}>
            <ImageCard src={MyPhoto} />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Card body >
              <p>
                I'm Tomáš Gabriel. I am from Czechia, and I studied IT at a high
                school located in Uherské Hradiště called OAUH.
              </p>
              <p>
                Here are some of my accounts, which you might find interesting:
              </p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card body >
              I completed high school with a focus on IT and gained practical
              experience at Urbitech, where I also worked on applications and
              websites in my free time. I learned a lot about how companies
              operate and gained experience working with React in a corporate
              environment.
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card body >
              <p>
                In terms of programming languages, I am proficient in
                JavaScript, including pure JavaScript, JQuery, and
                ReactJS/Native, as well as Native Base. I am also skilled in
                HTML, CSS, LESS, Tailwind, and Bootstrap. Additionally, I have
                experience with SQL, specifically MySQL.
              </p>
              <p>
                While I am less confident in my abilities with Java and PHP,
                specifically Nette and CodeIgniter frameworks, I am still
                capable of writing code in these languages.
              </p>
              <p>
                For design purposes, I utilize Adobe Photoshop, XD, and
                Illustrator. I have a basic understanding of Premiere Pro for
                video editing. I also utilize paint.net for certain design
                tasks. As for my preferred Integrated Development Environment
                (IDE), I use Visual Studio Code.
              </p>
              <p>
                Of course I work on my skills so I'm always learning new things
                and improving in my existent skills.
              </p>
              <p>
                For now I do both front and backend development and utilize
                Amazon Web Services for my projects.
              </p>
            </Card>
          </Col>
        </Row>
      </Stack>
    </section>
  );
};

export default About;
