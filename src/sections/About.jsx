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

import dotnetLogo from '../assets/logos/dotnet_logo.svg';
import antDesignLogo from '../assets/logos/antdesign_logo.svg';
import colorHuntLogo from '../assets/logos/colorhunt_logo.svg';
import figmaLogo from '../assets/logos/figma_logo.svg';

import wideAWSLogo from '../assets/logos/wide_aws_logo.svg';
import wideMySQLLogo from '../assets/logos/wide_mysql_logo.svg';
import wideJSLogo from '../assets/logos/wide_js_logo.svg';
import reactLogo from '../assets/logos/react_logo.svg';
import wideTailwindogo from '../assets/logos/wide_tailwind_logo.svg';
import wideBootstrapLogo from '../assets/logos/wide_bootstrap_logo.svg';
import { useTranslation } from 'react-i18next';

const About = ({ aboutSection }) => {
  const { t } = useTranslation();

  return (
    <section
      id='about'
      style={{ paddingTop: '95px' }}
      className='d-flex flex-column mt-5'
      ref={aboutSection}
    >
      <Stack gap={4}>
        <Row className='row-gap-3'>
          <Col lg={7}>
            <Card>
              <Card.Body className='gap-2 d-flex flex-column' >
                <AccentTextCard>{t('about.title')}</AccentTextCard>
                <p className='ntmy'>{t('about.niceToMeetYou')}</p>
                <p>
                {t('about.iAm')}
                </p>
                <Stack gap={3}>
                  <Row className='row-gap-3'>
                    <Col xl={6}>
                      <IconCard link="https://github.com/VirtualCZ" gradientCol="primary" src={ghLogo}>{t('about.my')} GitHub {t('about.account')}</IconCard>
                    </Col>
                    <Col xl={6}>
                      <IconCard link="https://www.instagram.com/tomas_v_chill/" gradientCol="secondary" src={igLogo}>{t('about.my')} Instagram {t('about.account')}</IconCard>
                    </Col>
                  </Row>
                  <IconCard link="https://www.linkedin.com/in/tomasgab" gradientCol="danger" src={linkedinLogo}>{t('about.my')} Linked In {t('about.account')}</IconCard>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={5}>
            <ImageCard imgClass='h-100' className='d-none d-lg-flex' src={MyPhoto} />
            <ImageCard className='d-flex d-lg-none' src={MyPhoto} />
          </Col>
        </Row>
        <h2 className='mt-4'>Certificates I've acquired:</h2>
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
              {t('about.designTitle')}
            </AccentTextCard>
            <div>
              <p>
                {t('about.designText')}
              </p>
              <p className='fw-bolder fs-3 text-primary text-uppercase'>{t('about.designTools')}</p>
              <Row className='row-gap-3'>
                <Col sm={12} lg={4}>
                  <IconCard link="https://www.figma.com/" src={figmaLogo}>Figma</IconCard>
                </Col>
                <Col sm={12} lg={4}>
                  <IconCard link="https://ant.design/" src={antDesignLogo}>Ant Design</IconCard>
                </Col>
                <Col sm={12} lg={4}>
                  <IconCard link="https://colorhunt.co/" src={colorHuntLogo}>Color Hunt</IconCard>
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
                  {t('about.webDevTitle')}
                </AccentTextCard>
                <p className="mb-0">
                  {t('about.webDevText1')}  
                </p>
                <p>
                  {t('about.webDevText2')}  
                </p>
              </Stack>
            </Card>
          </Col>
          <Col lg={5}>
            <Card body>
              <Stack className='fh-web-showcase' gap={3}>
                <Row className='row-gap-3'>
                  <Col xs={6}>
                    <IconCard link="https://aws.amazon.com/" src={wideAWSLogo} />
                  </Col>
                  <Col xs={6}>
                    <IconCard link="https://www.mysql.com/" src={wideMySQLLogo} />
                  </Col>
                </Row>
                <Row className='row-gap-3'>
                  <Col xs={6}>
                    <IconCard link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" src={wideJSLogo} />
                  </Col>
                  <Col xs={6}>
                    <IconCard link="https://react.dev/" src={reactLogo} />
                  </Col>
                </Row>
                <Row className='row-gap-3'>
                  <Col xs={6}>
                    <IconCard link="https://tailwindcss.com/" src={wideTailwindogo} />
                  </Col>
                  <Col xs={6}>
                    <IconCard link="https://getbootstrap.com/" src={wideBootstrapLogo} />
                  </Col>
                </Row>
              </Stack>
            </Card>
          </Col>
        </Row>
        <Card body>
          <Stack gap={3}>
            <AccentTextCard color='success'>
              {t('about.mobileDevTitle')}
            </AccentTextCard>
            <div>
              <p>
                {t('about.mobileDevText')}
              </p>
              <Row className='row-gap-3'>
                <Col lg={4}>
                  <IconCard link="https://reactnative.dev/" src={reactLogo}>React Native</IconCard>
                </Col>
                <Col lg={4}>
                  <IconCard link="https://gluestack.io/" src={reactLogo}>gluestack</IconCard>
                </Col>
                <Col lg={4}>
                  <IconCard link="https://learn.microsoft.com/en-us/dotnet/maui/what-is-maui?view=net-maui-8.0" src={dotnetLogo}>MAUI with Blazor</IconCard>
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
