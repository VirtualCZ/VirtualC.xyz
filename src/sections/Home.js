import { useEffect, useState } from 'react';

import { API } from 'aws-amplify';
import { useTranslation } from 'react-i18next';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

const Home = ({ checked, toggleChecked }) => {
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
    <section
      style={{ height: '100vh', paddingTop: '109px' }}
      className='d-flex flex-column'
    >
      <Stack gap={3} style={{ flex: 'unset' }}>
        {/* <h1>{t('navigation.home')}</h1> */}
        <Row className='g-lg-3'>
          <Col lg={7} className='mb-3 mb-lg-0'>
            <Card body className='bg-secondary h-100'>
              <p>Hey there, I'm</p>
              <h1>Tomáš Gabriel,</h1>
              <h2>and I'm a web and app developer!</h2>
            </Card>
          </Col>
          <Col lg={5}>
            <Card body className='bg-primary h-100'>
              If you're in need of top-notch website and app development
              services, tailored to your specific needs, visit my Contact Me
              page and let's bring your ideas to life.
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Card body className='bg-primary'>
              Technologies I use:
              <Carousel
                responsive={responsive}
                deviceType={'desktop'}
                infinite={true}
                itemClass='coolClass'
              >
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
