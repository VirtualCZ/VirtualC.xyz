import { useEffect, useRef } from 'react';

import { API } from 'aws-amplify';
import { useTranslation } from 'react-i18next';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ImageCardAR1 from '../elements/ImageCardAR1';

import reactLogo from '../assets/logos/react_logo.svg';
import cssLogo from '../assets/logos/css_logo.svg';
import igLogo from '../assets/logos/ig_logo.svg';
import ghLogo from '../assets/logos/gh_logo.svg';
import htmlLogo from '../assets/logos/html_logo.svg';

import BlueDribbble from '../assets/logos/bl_dribbble.svg';
import BlueFacebook from '../assets/logos/bl_facebook.svg';
import BlueInstagram from '../assets/logos/bl_instagram.svg';
import BlueLinkedIn from '../assets/logos/bl_linkedin.svg';
import BlueTwitter from '../assets/logos/bl_twitter.svg';

const Home = ({ homeSection }) => {
  const responsive = {
    xxl: {
      breakpoint: { max: 3000, min: 1399 },
      items: 8,
      paritialVisibilityGutter: 60,
    },
    xl: {
      breakpoint: { max: 1399, min: 1199 },
      items: 7,
      paritialVisibilityGutter: 50,
    },
    lg: {
      breakpoint: { max: 1199, min: 991 },
      items: 6,
      paritialVisibilityGutter: 20,
    },
    md: {
      breakpoint: { max: 991, min: 767 },
      items: 5,
      paritialVisibilityGutter: 30,
    },
    sm: {
      breakpoint: { max: 767, min: 575 },
      items: 4,
      paritialVisibilityGutter: 10,
    },
    xs: {
      breakpoint: { max: 575, min: 0 },
      items: 4,
      paritialVisibilityGutter: 10,
    },
  };
  const { t } = useTranslation();

  return (
    <section id="home" ref={homeSection}>
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
        <Row className=''>
          <Col lg={12} xl={7} className='mb-3 mb-xl-0'>
            <Card>
              <Card.Body className="d-flex flex-column">
                <p className='hi'>Hey there 👋 I'm</p>
                <p className='my-name'>Tomáš Gabriel</p>
                <p className='i-am'>and I'm a web and app developer!</p>
                <div className='mt-auto'>
                  <Button variant='secondary' className="self-end">Hire Me 👋🏼</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className='row-gap-3 d-flex flex-column' lg={12} xl={5}>
            <Card body >
              <Card.Text className='check-out-text' style={{ width: "95%" }}>
                If You Are In Need Of A Web Page Or App Get In Touch And Let Your Ideas Come To Life.
              </Card.Text>
              <Button href="#projects" variant='info'>Check Out My Projects</Button>
            </Card>
            <Stack direction='horizontal' gap={2}>
                <ImageCardAR1 src={BlueFacebook} />

                <ImageCardAR1 src={BlueInstagram} />

                <ImageCardAR1 src={BlueTwitter} />

                <ImageCardAR1 src={BlueLinkedIn} />

                <ImageCardAR1 src={BlueDribbble} />
            </Stack>
          </Col>
        </Row>
        <h1>TECHNOLOGIES I USE:</h1>
        <Card>
          <Card.Body className='px-0'>
            <Carousel
              responsive={responsive}
              deviceType={'desktop'}
              infinite={true}
              itemClass='carouselItem'
            >
              <ImageCardAR1 src={reactLogo} />
              <ImageCardAR1 src={cssLogo} />
              <ImageCardAR1 src={igLogo} />
              <ImageCardAR1 src={ghLogo} />
              <ImageCardAR1 src={htmlLogo} />
              <ImageCardAR1 src={reactLogo} />
              <ImageCardAR1 src={cssLogo} />
              <ImageCardAR1 src={igLogo} />
              <ImageCardAR1 src={ghLogo} />
              <ImageCardAR1 src={htmlLogo} />
            </Carousel>
          </Card.Body>
        </Card>
      </Stack>
    </section>
  );
};

export default Home;
