import React from "react";
import "./banner.scss";

export const  HomePageBaner =() => {
  return (
    <div>
      <div className="video-background-container">
        <video autoPlay muted loop className="video-bg">
          <source src="/video_2025-04-24_15-29-30.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="banner">
          <div className="banner_left">
            <h1 className="banner_left_firstText">
              Представление облачных услуг
            </h1>

            <div className="banner_left_twoText">
              <h1 className="banner_left_twoText_secondText">
                и создание решений в области ИИ под ключ
              </h1>
            </div>

            <p className="banner_left_thirdText">
              оставь работу и работай на суперкопьютере с любым установленными
              софтом удаленно
            </p>

            <div className="banner_left_block">
              <p className="banner_left_thirdText_text">
                ALG Soft (ООО «А-Эл-Джи Софт») — это российская компания,
                основанная в 1996 году в Благовещенске. Она специализируется на
                розничной и оптовой продаже компьютерной и офисной техники,
                обслуживании корпоративных клиентов, а также предоставляет
                услуги авторизованного сервисного центра и реализует
                инфраструктурные проекты. РБК Компании +2 algsoft.ru +2
                algsoft.ru +2 Компания выпускает собственную линейку
                компьютеров под брендом ALG (модели Start, Sprint, Forward),
                которые были удостоены звания лауреата программы «100 лучших
                товаров России». ALG Soft имеет магазины и сервисные центры в
                Благовещенске, Белогорске и Хабаровске. algsoft.ru algsoft.ru
                Основной офис компании расположен по адресу: ул.
                Красноармейская, 129, г. Благовещенск.
              </p>
            </div>

            <div className="banner_left_buttons">
              <button className="banner_left_buttons_first">
                Заказать решение
              </button>
              <button className="banner_left_buttons_second">
                Попробовать бесплатно =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
