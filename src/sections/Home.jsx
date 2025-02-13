import { useTranslation } from 'react-i18next';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ImageCardAR1 from '../elements/ImageCardAR1';

import antdesignLogo from '../assets/logos/antdesign_logo.svg';
import colorHuntLogo from '../assets/logos/colorhunt_logo.svg';
import cssLogo from '../assets/logos/css_logo.svg';
import dotNetLogo from '../assets/logos/dotnet_logo.svg';
import figmaLogo from '../assets/logos/figma_logo.svg';
import ghLogo from '../assets/logos/gh_logo.svg';
import htmlLogo from '../assets/logos/html_logo.svg';
import jsLogo from '../assets/logos/js_logo.svg';
import reactLogo from '../assets/logos/react_logo.svg';

import BlueTelegram from '../assets/logos/bl_telegram.svg';
import BlueFacebook from '../assets/logos/bl_facebook.svg';
import BlueInstagram from '../assets/logos/bl_instagram.svg';
import BlueLinkedIn from '../assets/logos/bl_linkedin.svg';
import BlueTwitter from '../assets/logos/bl_twitter.svg';
import ImageCard from '../elements/ImageCard';

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
      <Stack gap={3}>
        <Row className=''>
          <Col lg={12} xl={7} className='mb-3 mb-xl-0'>
            <Card>
              <Card.Body className="d-flex flex-column">
                <p className='hi'>{t('home.heyThere')}</p>
                <p className='my-name'>Tomáš Gabriel</p>
                <p className='i-am'>{t('home.whatIDo')}</p>
                <Button href="#projects" variant='info' className="align-self-start">{t('home.checkOutButton')}</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='row-gap-3 d-flex flex-column' lg={12} xl={5}>
            <Card>
              <Card.Body className="d-flex flex-column">
                <Card.Text className='pe-2 fs-3 flex-grow-1'>
                  {t('home.offerService')}
                </Card.Text>
                <Button href="#contact" variant='secondary' className="align-self-start">{t('home.offerButton')}</Button>
              </Card.Body>
            </Card>
            <Stack direction='horizontal' className='d-none d-md-flex d-xl-none' gap={3}>
              <ImageCard link="https://www.facebook.com/SomeoneCZ/" className='flex-fill align-items-center' src={BlueFacebook} />
              <ImageCard link="https://www.instagram.com/tomas_v_chill/" className='flex-fill align-items-center' src={BlueInstagram} />
              <ImageCard link="https://x.com/_Tomas_Gabriel_" className='flex-fill align-items-center' src={BlueTwitter} />
              <ImageCard link="https://t.me/AkiraGoldFang" className='flex-fill align-items-center' src={BlueTelegram} />
              <ImageCard link="https://www.linkedin.com/in/tomasgab" className='flex-fill align-items-center' src={BlueLinkedIn} />
            </Stack>
            <Stack direction='horizontal' className='d-flex d-md-none d-xl-flex' gap={3}>
              <ImageCardAR1 link="https://www.facebook.com/SomeoneCZ/" src={BlueFacebook} />
              <ImageCardAR1 link="https://www.instagram.com/tomas_v_chill/" src={BlueInstagram} />
              <ImageCardAR1 link="https://x.com/_Tomas_Gabriel_" src={BlueTwitter} />
              <ImageCardAR1 link="https://t.me/AkiraGoldFang" src={BlueTelegram} />
              <ImageCardAR1 link="https://www.linkedin.com/in/tomasgab" src={BlueLinkedIn} />
            </Stack>
          </Col>
        </Row>
        <h1>{t('home.technologiesIUse')}</h1>
        <Card>
          <Card.Body className='px-0'>
            <Carousel
              responsive={responsive}
              deviceType={'desktop'}
              infinite={true}
              itemClass='carouselItem'
            >
              <ImageCardAR1 link="https://learn.microsoft.com/en-us/dotnet/maui/what-is-maui?view=net-maui-8.0" src={dotNetLogo} />
              <ImageCardAR1 link="https://react.dev/" src={reactLogo} />
              <ImageCardAR1 link="https://www.w3.org/Style/CSS/Overview.en.html" src={cssLogo} />
              <ImageCardAR1 link="https://developer.mozilla.org/en-US/docs/Web/HTML" src={htmlLogo} />
              <ImageCardAR1 link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" src={jsLogo} />
              <ImageCardAR1 link="https://github.com/" src={ghLogo} />
              <ImageCardAR1 link="https://ant.design/" src={antdesignLogo} />
              <ImageCardAR1 link="https://colorhunt.co/" src={colorHuntLogo} />
              <ImageCardAR1 link="https://www.figma.com/" src={figmaLogo} />
            </Carousel>
          </Card.Body>
        </Card>
      </Stack>
    </section>
  );
};

export default Home;
