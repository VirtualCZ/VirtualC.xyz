import { useTranslation } from 'react-i18next';
import Card from '../elements/card/Card';
import CardHolder from '../elements/card/CardHolder';
import Skill from '../elements/skill/Skill';

const ReactWeb = () => {
  document.title = 'React - VirtualC';
  const { t } = useTranslation();
  return (
    <>
      <h1>React</h1>
      {/* <CardHolder>
        <Skill skillName="1 test" rating={1} />
      </CardHolder> */}
      <CardHolder>
        <Card className='card-logo'>
          <img src='logos/react_logo.svg' alt='React logo' />
        </Card>
        <Skill skillName='React' rating={4} />
      </CardHolder>
      <CardHolder>
        <Card>
          <p>{t('react.1')}</p>
          <br />
          <p>{t('react.2')}</p>
        </Card>
      </CardHolder>
      <CardHolder>
        <Skill skillName='JavaScript & JQuery' rating={4} />
        <Card className='card-logo'>
          <img src='logos/js_logo.svg' alt='JavaScript logo' />
        </Card>
      </CardHolder>
      <CardHolder>
        <Card>
          <p>{t('react.3')}</p>
          <br />
          <p>{t('react.4')}</p>
          <br />
          <p>{t('react.5')}</p>
        </Card>
      </CardHolder>
      <CardHolder>
        <Card className='card-logo'>
          <img src='logos/css_logo.svg' alt='CSS logo' />
        </Card>
        <Skill skillName='CSS & LESS' rating={5} />
      </CardHolder>
      <CardHolder>
        <Card>
          <p>{t('react.6')}</p>
          <br />
          <p>{t('react.7')}</p>
        </Card>
      </CardHolder>
    </>
  );
};
export default ReactWeb;
