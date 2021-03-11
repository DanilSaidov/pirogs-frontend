import React from "react";

function DeliveryItem({ adress }) {
  return (
    <div className='delivery__points__item'>
      <p className='delivery__points__item-adress'>{adress}</p>
      <div className='delivery__points__grafic'>
        <p className='delivery__points__grafic-title'>Время работы: </p>
        <div className='delivery__points__workTime-wrapper'>
          <div className='delivery__points__workTime'>
            <span className='delivery__points__workTime-day'>ПН</span>
            <span className='delivery__points__workTime-time'>
              <i>10:00</i>
              <i>23:00</i>
            </span>
          </div>
          <div className='delivery__points__workTime'>
            <span className='delivery__points__workTime-day'>ВТ</span>
            <span className='delivery__points__workTime-time'>
              <i>10:00</i>
              <i>23:00</i>
            </span>
          </div>
          <div className='delivery__points__workTime'>
            <span className='delivery__points__workTime-day'>СР</span>
            <span className='delivery__points__workTime-time'>
              <i>10:00</i>
              <i>23:00</i>
            </span>
          </div>
          <div className='delivery__points__workTime'>
            <span className='delivery__points__workTime-day'>ЧТ</span>
            <span className='delivery__points__workTime-time'>
              <i>10:00</i>
              <i>23:00</i>
            </span>
          </div>
          <div className='delivery__points__workTime'>
            <span className='delivery__points__workTime-day'>ПТ</span>
            <span className='delivery__points__workTime-time'>
              <i>10:00</i>
              <i>23:00</i>
            </span>
          </div>
          <div className='delivery__points__workTime'>
            <span className='delivery__points__workTime-day'>СБ</span>
            <span className='delivery__points__workTime-time'>
              <i>10:00</i>
              <i>00:00</i>
            </span>
          </div>
          <div className='delivery__points__workTime'>
            <span className='delivery__points__workTime-day'>ВС</span>
            <span className='delivery__points__workTime-time'>
              <i>10:00</i>
              <i>00:00</i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryItem;
