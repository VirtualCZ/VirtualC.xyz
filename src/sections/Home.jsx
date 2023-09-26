import { useEffect, useState } from 'react';

import { API } from 'aws-amplify';
import { useTranslation } from 'react-i18next';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import reactLogo from '../assets/logos/react_logo.svg';
import cssLogo from '../assets/logos/css_logo.svg';
import igLogo from '../assets/logos/ig_logo.svg';
import ghLogo from '../assets/logos/gh_logo.svg';
import htmlLogo from '../assets/logos/html_logo.svg';
import ImageCard from '../elements/navbar/ImageCard/ImageCard';

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      paritialVisibilityGutter: 30,
    },
  };
  const { t } = useTranslation();

  return (
    <section>
      {/* <p style={{fontWeight: 200, fontStyle: 'normal'}}>200 thin</p>
          <p style={{fontWeight: 200, fontStyle: 'italic'}}>200 thin italic</p>
          <p style={{fontWeight: 300, fontStyle: 'normal'}}>300 light</p>
          <p style={{fontWeight: 300, fontStyle: 'italic'}}>300 light italic</p>
          <p style={{fontWeight: 400, fontStyle: 'normal'}}>400 regular</p>
          <p style={{fontWeight: 400, fontStyle: 'italic'}}>400 regular italic</p>
          <p style={{fontWeight: 500, fontStyle: 'normal'}}>500 medium</p>
          <p style={{fontWeight: 500, fontStyle: 'italic'}}>500 medium italic</p>
          <p style={{fontWeight: 600, fontStyle: 'normal'}}>600 semibold</p>
          <p style={{fontWeight: 600, fontStyle: 'italic'}}>600 semibold italic</p>
          <p style={{fontWeight: 700, fontStyle: 'normal'}}>700 bold</p>
          <p style={{fontWeight: 700, fontStyle: 'italic'}}>700 bold italic</p>
          <p style={{fontWeight: 900, fontStyle: 'normal'}}>900 black</p>
          <p style={{fontWeight: 900, fontStyle: 'italic'}}>900 black italic</p> */}

      <Stack gap={3}>
        {/* <h1>{t('navigation.home')}</h1> */}
        <Row className='g-lg-3'>
          <Col lg={7} className='mb-3 mb-lg-0'>
            <Card body className='bg-dark'>
              <p>HEY THERE 👋 I’M</p>
              <p className='my-name'>Tomáš Gabriel</p>
              <h2>and I'm a web and app developer!</h2>
              <Button variant='secondary'>Hire Me 👋🏼</Button>
            </Card>
          </Col>
          <Col lg={5}>
            <Card body >
              <Card.Text>
                If You Are In Need Of A Web Page Or App Get In Touch And Let Your Ideas Come To Life.
              </Card.Text>
              <Card.Link>
                <Button href="#projects" variant='info'>Check Out My Projects</Button>
              </Card.Link>
            </Card>
            <Row>
              <Col>
                <ImageCard src={reactLogo} />
              </Col>
              <Col>
                <ImageCard src={cssLogo} />
              </Col>
              <Col>
                <ImageCard src={ghLogo} />
              </Col>
              <Col>
                <ImageCard src={htmlLogo} />
              </Col>
              <Col>
                <ImageCard src={igLogo} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Card body >
              Technologies I use:
              <Carousel
                responsive={responsive}
                deviceType={'desktop'}
                infinite={true}
                itemClass='coolClass'
              >
                <ImageCard src={igLogo} />
                <ImageCard src={htmlLogo} />
                <ImageCard src={ghLogo} />
                <img
                  draggable={false}
                  style={{ width: '100%', height: '100%' }}
                  src={'gg'}
                />
                <img
                  draggable={false}
                  style={{ width: '100%', height: '100%' }}
                  src={'gg'}
                />
                <img
                  draggable={false}
                  style={{ width: '100%', height: '100%' }}
                  src={'gg'}
                />
                <img
                  draggable={false}
                  style={{ width: '100%', height: '100%' }}
                  src={'gg'}
                />
                <img
                  draggable={false}
                  style={{ width: '100%', height: '100%' }}
                  src={'gg'}
                />
                <img
                  draggable={false}
                  style={{ width: '100%', height: '100%' }}
                  src={'gg'}
                />
                <img
                  draggable={false}
                  style={{ width: '100%', height: '100%' }}
                  src={'gg'}
                />
                <img
                  draggable={false}
                  style={{ width: '100%', height: '100%' }}
                  src={'gg'}
                />
                <img
                  draggable={false}
                  style={{ width: '100%', height: '100%' }}
                  src={'gg'}
                />
                <img
                  draggable={false}
                  style={{ width: '100%', height: '100%' }}
                  src={'gg'}
                />
              </Carousel>
            </Card>
          </Col>
        </Row>
      </Stack>

      <Row className='flex-grow-1'>
        <Col
          lg={12}
          className='flex-1 h-100 d-flex align-items-center justify-content-center'
        >
          <a href='#projects'>
            <p className='mb-0'>Check out my projects</p>
          </a>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
