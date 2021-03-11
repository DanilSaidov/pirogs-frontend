import React from "react";

import { DeliveryItem } from "components";

import deliveryImg from "assets/img/delivery.jpg";

const deliveryItems = [
  { adress: "г.Шахты, ул. Ленина 89" },
  { adress: "г.Новошахтинск, ул. Центральная 8" },
  { adress: "г.Шахты, ул. Фрунзе 36" },
];
function Delivery() {
  return (
    <div className='delivery'>
      <div className='container'>
        <h1 className='delivery-title'>
          <img src={deliveryImg} alt='Delivery' />
          Доставка
        </h1>
        <div className='delivery__free'>
          <p>
            Минимальная сумма заказа для бесплатной доставки по Вашему городу
            500 руб.
            <br />
            Сумма доставки за пределы города зависит от Вашего адреса.
            <br /> Сумму доставки за пределы города уточняйте у администратора
            по номеру телефона
            <a href='tel:+88005558202'> 8 (800) 555-82-02 </a>
          </p>
        </div>
        <div className='delivery__points'>
          <h2 className='delivery__points-title'>Пункты самовывоза</h2>
          {deliveryItems.map((item, index) => (
            <DeliveryItem key={`${item}_${index}`} adress={item.adress} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Delivery;
