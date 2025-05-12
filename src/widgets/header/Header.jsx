import './header.scss';
import { NavLink } from 'react-router-dom';
import HeaderLogo from '../../shared/headfooter/0algeasort logo  1.jpg'
import HeaderGmail from '../../shared/headfooter/envelope-alt.png'
import HeaderPhone from '../../shared/headfooter/phone.png'


export const Header = () => {
  

  return (
    <div className='header'>
      <div className='header-data container'>
        <div>
          <img className='header-data-logo headfooter-mainLogo' src={HeaderLogo} alt="" />
        </div>
        <div className='header-data-text'>
          <div className='header-data-text-first'>
            <img className='header-data-text-first-logo headfooter-logo' src={HeaderGmail} alt="" />
            <h3 className='header-data-text-first-gmail headfooter-gmail'>INFO@MAIL.COM</h3>
          </div>
          <div className='header-data-text-second'>
            <img className='header-data-text-second-logo headfooter-logo' src={HeaderPhone} alt="" />
            <h3 className='header-data-text-second-number headfooter-number'>+7 (000)00 00 000</h3>
          </div>
          <div className='header-data-text-button'>
            <button className='header-data-text-button-text headfooter-button'>Заказать звонок</button>
          </div>
        </div>
      </div>
      <div className='header-block'>
        <nav className='header-block-links'>
          <NavLink className='link' to={'/'}>ГЛАВНАЯ</NavLink>
          <NavLink className='link' to={''} >УСЛУГИ</NavLink>
          <NavLink className='link' to={'/support'}>ПОДДЕРЖКА</NavLink>
          <NavLink className='link' to={''}>БИЗНЕС-КЕЙСЫ</NavLink>
          <NavLink className='link' to={'/aboutPage'} >О КОМПАНИИ</NavLink>
          <NavLink className='link' to={''}>ВОПРОС-ОТВЕТ</NavLink>
          <NavLink className='link' to={''}>КОНТАКТЫ</NavLink>
        </nav>
      </div>
    </div>
  );
};