import React from "react";
import { Col } from "antd";
import vkIcon from "assets/img/vk-icon.svg";
import okIcon from "assets/img/odnoklassiniki-icon.svg";
import {
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__inner'>
          <Col className='footer__item footer__item-contacts' xs={24} sm={12}>
            <div className='footer__contact'>
              <PhoneOutlined />
              <a href='tel:88005558202'>8 (800) 555-82-02</a>
            </div>
            <div className='footer__contact'>
              <MailOutlined /> <a href='mailto:admin@mail.ru'>admin@mail.ru</a>
            </div>
            <div className='footer__contact'>
              <HomeOutlined />
              <p>
                <span>г.Шахты, ул. Ленина 89</span>
                <span>г.Шахты, ул. Фрунзе 36</span>
                <span>г.Новошахтинск, ул. Центральная 8</span>
              </p>
            </div>
          </Col>
          <Col className='footer__item footer__item-social'>
            <a href='#'>
              <InstagramOutlined />
            </a>
            <a href='#'>
              <img src={vkIcon} alt='VK' />
            </a>
            <a href='#'>
              <img src={okIcon} alt='Odnoklassniki' />
            </a>
          </Col>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
