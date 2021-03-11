import React from "react";

import { DeliveryItem } from "components";

import contactsImg from "assets/img/pie.png";

const deliveryItems = [
  { adress: "г.Шахты, ул. Ленина 89" },
  { adress: "г.Новошахтинск, ул. Центральная 8" },
  { adress: "г.Шахты, ул. Фрунзе 36" },
];
function Contacts() {
  return (
    <div className='contacts'>
      <div className='container'>
        <h1 className='contacts-title'>
          <img src={contactsImg} alt='Delivery' />
          Контакты
        </h1>
        <div className='contacts__points'>
          <div className='contacts__points-title'>
            <p>
              Вы можете связяаться с нами по единому телефону
              <a href='tel:88005558202'> 8 (800) 555-82-02</a>, либо приехать к
              нам в гости в своем городе.
              <br /> Если у Вас есть предложения по улучшению качества
              обслуживания, то Вы можете написать нам на почту{" "}
              <a href='mailto:admin@mail.ru'>mailto:admin@mail.ru</a>
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
    </div>
  );
}

export default Contacts;
