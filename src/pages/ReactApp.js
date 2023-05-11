import { useTranslation } from 'react-i18next';
import Card from '../elements/card/Card';
import CardHolder from '../elements/card/CardHolder';
import Skill from '../elements/skill/Skill';

const ReactApp = () => {
  const { t } = useTranslation();
  document.title = 'React Native - VirtualC';
  return (
    <>
      <h1>React Native</h1>
      <CardHolder>
        <Card className='card-logo'>
          <img src='logos/react_logo.svg' alt='React logo' />
        </Card>
        <Skill skillName='React Native' rating={4} />
      </CardHolder>
      <CardHolder>
        <Card>
          <p>{t('react_native.1')}</p>
          <br />
          <p>{t('react_native.2')}</p>
        </Card>
      </CardHolder>
      <CardHolder>
        <Skill skillName='Native Base' rating={4} />
        <Card className='card-logo'>
          <img src='logos/nb_logo.png' alt='Native Base logo' />
        </Card>
      </CardHolder>
      <CardHolder>
        <Card>
          <p>{t('react_native.3')}</p>
          <br />
          <p>{t('react_native.4')}</p>
        </Card>
      </CardHolder>
      <CardHolder>
        <Card className='card-logo'>
          <img src='logos/js_logo.svg' alt='JavaScript logo' />
        </Card>
        <Skill skillName='JavaScript' rating={4} />
      </CardHolder>
      <CardHolder>
        <Card>
          <p>{t('react_native.5')}</p>
          <br />
          <p>{t('react_native.6')}</p>
        </Card>
      </CardHolder>
    </>
  );
};
export default ReactApp;
