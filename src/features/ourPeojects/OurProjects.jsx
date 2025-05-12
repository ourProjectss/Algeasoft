import './ourProjects.scss'
import cber from '../../shared/features/Group 18.png'
import alfa from '../../shared/features/Group 19.png'
import bitrics from '../../shared/features/Group 20.png'
import bitrics2 from '../../shared/features/Group 21.png'
import qiwi from '../../shared/features/Group 22.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'


export const OurProjects = () => {
    return (
        <div className='ourProjects contaoner' >
            <h1 className='ourProjects-title'>Наши партнеры</h1>
            <Swiper
                className='ourProjects-images'
                modules={[Autoplay]}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={1500}
                loop={true}
                spaceBetween={20}
                slidesPerView={4}
            >
                <SwiperSlide className='fade-slide'>
                    <img className='ourProjects-images-img' src={cber} alt="" />
                </SwiperSlide>
                <SwiperSlide className='fade-slide'>
                    <img className='ourProjects-images-img' src={alfa} alt="" />
                </SwiperSlide>
                <SwiperSlide className='fade-slide'>
                    <img className='ourProjects-images-img' src={bitrics} alt="" />
                </SwiperSlide>
                <SwiperSlide className='fade-slide'>
                    <img className='ourProjects-images-img' src={bitrics2} alt="" />
                </SwiperSlide>
                <SwiperSlide className='fade-slide'>
                    <img className='ourProjects-images-img' src={qiwi} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}