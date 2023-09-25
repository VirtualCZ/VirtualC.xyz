import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  document.title = '404 - VirtualC';
  return (
    <div>
      <p>{t('404.error')}</p>
      <p>{t('404.text')}</p>
    </div>
  );
};
export default NotFound;
