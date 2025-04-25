import './aboutBaner.scss'
import company from '../../../shared/aboutPageImg/Rectangle 14.png'

export const AboutBaner = () => {
    return (
        <div className='aboutBaner'>
            <div className='aboutBaner-text'>
                <h1 className='aboutBaner-text-mainTitle'>О компании</h1>
                <h1 className='aboutBaner-text-title1'>IT-инфраструктура <span className='aboutBaner-text-title2'>для амбициозных проектов</span></h1>
                <p className='aboutBaner-text-description'>Мы помогаем компаниям уделять больше внимания своим продуктам и проектам, 
                а на себя берем обязательства по поддержке инфраструктуры</p>
            </div>
            <div className='aboutBaner-img'>
                <img src={company} alt="" />
            </div>
        </div>
    );
}

