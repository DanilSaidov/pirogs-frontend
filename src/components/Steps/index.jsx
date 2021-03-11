import React from "react";
import { Col } from "antd";

function Steps() {
  return (
    <div className='steps'>
      <div className='container'>
        <div className='steps__inner'>
          <Col className='steps__title' xs={24}>
            <h2>Как сделать заказ?</h2>
          </Col>
          <Col xs={12} md={6} className='steps__item'>
            <h2>Оформление</h2>
            <p>Оформите заказ на сайте или по телефону 8-928-279-18-86</p>
          </Col>
          <Col xs={12} md={6} className='steps__item'>
            <h2>Подтверждение</h2>
            <p>Мы перезвоним и подтвердим заказ</p>
          </Col>
          <Col xs={12} md={6} className='steps__item'>
            <h2>Доставка</h2>
            <p>Время приготовления и доставки 60 минут*</p>
          </Col>
          <Col xs={12} md={6} className='steps__item'>
            <h2>Оплата</h2>
            <p>Оплатите курьеру наличными</p>
          </Col>
        </div>
        <p className='steps__time'>
          *Время примерное,уточняйте точное время у администратора
        </p>
      </div>
    </div>
  );
}

export default Steps;
