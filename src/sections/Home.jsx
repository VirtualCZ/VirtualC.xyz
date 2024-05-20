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
import Image from 'react-bootstrap/Image';

import reactLogo from '../assets/logos/react_logo.svg';
import cssLogo from '../assets/logos/css_logo.svg';
import igLogo from '../assets/logos/ig_logo.svg';
import ghLogo from '../assets/logos/gh_logo.svg';
import htmlLogo from '../assets/logos/html_logo.svg';
import ImageCard from '../elements/ImageCard';

import BlueDribbble from '../assets/logos/bl_dribbble.svg';
import BlueFacebook from '../assets/logos/bl_facebook.svg';
import BlueInstagram from '../assets/logos/bl_instagram.svg';
import BlueLinkedIn from '../assets/logos/bl_linkedin.svg';
import BlueTwitter from '../assets/logos/bl_twitter.svg';
import ImageCardAR1 from '../elements/ImageCardAR1';
;     
const Home = ({ homeSection }) => {
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
    <section ref={homeSection}>
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
        <Row>
          <Col lg={7} className='mb-3 mb-lg-0'>
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
          <Col lg={5}>
            <Stack gap={3}>
              <Row>
                <Col>
                  <Card body >
                    <Card.Text className='fs-3' style={{width: "95%"}}>
                      If You Are In Need Of A Web Page Or App Get In Touch And Let Your Ideas Come To Life.
                    </Card.Text>
                      <Button href="#projects" variant='info'>Check Out My Projects</Button>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ImageCardAR1 src={BlueFacebook} />
                </Col>
                <Col>
                  <ImageCardAR1 src={BlueInstagram} />
                </Col>
                <Col>
                  <ImageCardAR1 src={BlueTwitter} />
                </Col>
                <Col>
                  <ImageCardAR1 src={BlueLinkedIn} />
                </Col>
                <Col>
                  <ImageCardAR1 src={BlueDribbble} />
                </Col>
              </Row>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>TECHNOLOGIES I USE:</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Card>
            <Card.Body className='px-0'>
              <Carousel
                responsive={responsive}
                deviceType={'desktop'}
                infinite={true}
                itemClass='carouselItem'
              >
                <ImageCardAR1 src={igLogo} />
                <ImageCardAR1 src={htmlLogo} />
                <ImageCardAR1 src={ghLogo} />
                <ImageCardAR1 src={igLogo} />
                <ImageCardAR1 src={htmlLogo} />
                <ImageCardAR1 src={ghLogo} />
                <ImageCardAR1 src={igLogo} />
                <ImageCardAR1 src={htmlLogo} />
                <ImageCardAR1 src={ghLogo} />
                <ImageCardAR1 src={igLogo} />
                <ImageCardAR1 src={htmlLogo} />
                <ImageCardAR1 src={ghLogo} />
              </Carousel>
            </Card.Body>
            </Card>
          </Col>
        </Row>
      </Stack>
    </section>
  );
};

export default Home;
