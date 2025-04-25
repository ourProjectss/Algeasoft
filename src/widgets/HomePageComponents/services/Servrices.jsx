import React from "react";
import "./services.scss";
import services_images from "../../../shared/homepageImages/services/Rectangle 23 (6).jpg";

export const Servrices=() =>{
  return (
    <div className="services">
      <h1 className="services_text1">Наши услуги</h1>
      <p className="services_text2">
        Мы решаем любые бизнес-задачи при помощи облачных технологий и систем ИИ
      </p>
      <div className="buner">
        <div className="services_block_container">
          <h3>VDS на основе GPU</h3>
          <img  className="services_img" src={services_images} alt="" />
          <a  href="./"> Подробнее  </a>
        </div>
        <div className="services_block_container">
          <h3>VDS на основе GPU</h3>
          <img className="services_img" src={services_images} alt="" />
          <a href="./"> Подробнее </a>
        </div>
        <div className="services_block_container">
          <h3>VDS на основе GPU</h3>
          <img className="services_img" src={services_images} alt="" />
          <a href="./"> Подробнее </a>
        </div>
      </div>
    </div>
  );
}
