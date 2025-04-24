import "./footer.scss"
import { NavLink } from "react-router-dom"
import Logo from '../../shared/headfooterImg/logo (1).png'
import footerGmail from '../../shared/headfooterImg/envelope-alt (1).png'
import footerPhone from '../../shared/headfooterImg/phone (1).png'


export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-block">
        <div className="footer-block-logo" >
          <img className="footer-block-logo" src={Logo} alt="" />
        </div>
        <div>
          <nav className="footer-block-Links">
            <NavLink className='link' to={'/'}>ГЛАВНАЯ</NavLink>
            <NavLink className='link'>УСЛУГИ</NavLink>
            <NavLink className='link'>ПОДДЕРЖКА</NavLink>
            <NavLink className='link'>БИЗНЕС-КЕЙС</NavLink>
          </nav>
        </div>
        <div>
          <nav className="footer-block-Links">
            <NavLink className='link' to={'AboutPage'}>О КОМПАНИИ</NavLink>
            <NavLink className='link'>БЛОГ</NavLink>
            <NavLink className='link'>КОНТАКТЫ</NavLink>
          </nav>
        </div>
      </div>
      <div className="footer-block-text">
        <div>
          <button className="footer-block-text-button">Заказать звонок</button>
        </div>
        <div>
          <div className="footer-block-text-first">
            <img className="footer-block-text-first-logo headdfooter-logo" src={footerPhone} alt="" />
            <h3 className="footer-block-text-first-number headfooter-number">+7 (000)00 00 000</h3>
          </div>
          <div className="footer-block-text-second">
            <img className="footer-block-text-first-logo haedfooter-logo" headdfooter-logo src={footerGmail} alt="" />
            <h3 className="footer-block-text-first-number headfooter-number">INFO@MAIL.COM</h3>
          </div>
        </div>
      </div>
    </div>
  )
}