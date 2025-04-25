import './header.scss';
import { NavLink } from 'react-router-dom';
import HeaderLogo from '../../shared/headfooter/0algeasort logo  1.jpg'
import HeaderGmail from '../../shared/headfooter/envelope-alt.png'
import HeaderPhone from '../../shared/headfooter/phone.png'
import { HomePage } from '../../pages/homePage/HomePage';


export const Header = () => {
  

  return (
    <div className='header '>
      <div className='header-data container'>
        <div>
          <img className='header-data-logo' src={HeaderLogo} alt="" />
        </div>
        <div className='header-data-text'>
          <div className='header-data-text-first'>
            <img className='header-data-text-first-logo' src={HeaderGmail} alt="" />
            <h3 className='header-data-text-first-gmail'>INFO@MAIL.COM</h3>
          </div>
          <div className='header-data-text-second'>
            <img className='header-data-text-second-logo' src={HeaderPhone} alt="" />
            <h3 className='header-data-text-second-number'>+7 (000)00 00 000</h3>
          </div>
          <div className='header-data-text-button'>
            <button className='header-data-text-button-text'>Заказать звонок</button>
          </div>
        </div>
      </div>
      <div className='header-block'>
        <nav className='header-block-links'>
          <NavLink className='link' to={'/'}>ГЛАВНАЯ</NavLink>
          <NavLink className='link' to={''} >УСЛУГИ</NavLink>
          <NavLink className='link' to={''}>ПОДДЕРЖКА</NavLink>
          <NavLink className='link' to={''}>БИЗНЕС-КЕЙСЫ</NavLink>
          <NavLink className='link' to={'AboutPage'} >О КОМПАНИИ</NavLink>
          <NavLink className='link' to={''}>ВОПРОС-ОТВЕТ</NavLink>
          <NavLink className='link' to={''}>КОНТАКТЫ</NavLink>
        </nav>
      </div>
    </div>
  );
};