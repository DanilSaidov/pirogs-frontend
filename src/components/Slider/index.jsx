import React from "react";
import { Carousel } from "antd";
import img from "assets/img/slide1.jpg";

function Slider() {
  return (
    <div className='slider'>
      <Carousel effect='fade'>
        <div className='slider__item'>
          <img src={img} alt='Slide' className='slider__item__img' />
          <h3 className='slider__item__title'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            debitis odio consectetur eum alias nihil qui architecto, sit
            corporis impedit quis ab dolores deleniti asperiores incidunt
            voluptatibus. Aperiam, labore molestias.
          </h3>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
