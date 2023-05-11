import { NavLink } from 'react-router-dom';
import {
  RiHomeLine,
  RiSettingsLine,
  RiErrorWarningLine,
  RiInformationLine,
} from 'react-icons/ri';
import { TbBrandBlender } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { ImLab } from 'react-icons/im';
import './Sidebar.css';

import DropdownButton from '../dropdownButton/DropdownButton';
import { useTranslation } from 'react-i18next';

function Sidebar() {
  const { t, i18n } = useTranslation();

  return (
    <nav className='sidebar-container'>
      <ul>
        <li>
          <NavLink exact to='/'>
            <RiHomeLine /> <p>{t('navigation.home')}</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/React'>
            <FaReact /> <p>React</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/ReactNative'>
            <FaReact /> <p>React Native</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/Blender'>
            <TbBrandBlender /> <p>Blender</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/niccalc'>
            <ImLab /> <p>NicCalc</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/Contact'>
            <RiInformationLine /> <p>{t('navigation.contact')}</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/404'>
            <RiErrorWarningLine /> <p>404</p>
          </NavLink>
        </li>
      </ul>
      <ul className='sidebar-bottom'>
        <li>
          <div></div>
          <DropdownButton
            name={i18n.language}
            options={[
              {
                option: 'Čeština',
                onClick: () => {
                  i18n.changeLanguage('cs');
                },
              },
              {
                option: 'English',
                onClick: () => {
                  i18n.changeLanguage('en');
                },
              },
              {
                option: 'Deutsch',
                onClick: () => {
                  i18n.changeLanguage('de');
                },
              },
            ]}
          />
        </li>
        <li>
          <NavLink to='/settings'>
            <RiSettingsLine /> <p>{t('navigation.settings')}</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
