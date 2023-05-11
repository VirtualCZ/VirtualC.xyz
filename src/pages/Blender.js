import { useTranslation } from 'react-i18next';
import Card from '../elements/card/Card';
import CardHolder from '../elements/card/CardHolder';
import Skill from '../elements/skill/Skill';

const Blender = () => {
  document.title = 'Blender - VirtualC';
  const { t } = useTranslation();
  return (
    <>
      <h1>Blender</h1>
      <CardHolder>
        <Card className='card-logo'>
          <img src='logos/blender_logo.svg' alt='React logo' />
        </Card>
        <Skill skillName='Blender' rating={3} />
      </CardHolder>
      <CardHolder>
        <Card>
          <p>{t('blender.1')}</p>
        </Card>
      </CardHolder>
      <CardHolder>
        <Card>
          <p>{t('blender.2')}</p>
          <br />
          <p>{t('blender.3')}</p>
          <br />
          <p>{t('blender.4')}</p>
        </Card>
      </CardHolder>
      <CardHolder>
        <Card>
          <p>{t('blender.5')}</p>
          <br />
          <p>{t('blender.6')}</p>
        </Card>
      </CardHolder>
    </>
  );
};
export default Blender;
