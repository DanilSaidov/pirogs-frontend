import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Checkbox, Select, notification } from "antd";
import {
  UserOutlined,
  CarOutlined,
  HomeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button } from "../";

const { Option } = Select;
function CartForm({
  stepAction,
  currentStep,
  pizzas,
  totalPrice,
  items,
  confirmOrder,
}) {
  const history = useHistory();
  const [delivery, setDelivery] = React.useState("Доставка");
  const [sendOrder, setSendOrder] = React.useState(false);
  const onFinish = (values) => {
    setSendOrder(true);
    const order = pizzas.map((item) => {
      return {
        item,
        count: items[item.filter].items.length,
        totalPrice: items[item.filter].totalPrice,
      };
    });
    confirmOrder({ ...values, order, totalPrice })
      .then(({ data }) => {
        console.log(data);
        setSendOrder(false);
        history.push("/cart/done");
        stepAction.next();
      })
      .catch((err) => {
        notification.error({
          message: "Ошибка",
          description:
            "Уупс, заказ не принят. Попробуйте еще раз или позвоните нам по телефону.",
          placement: "topRight",
          duration: 2.5,
        });
        setSendOrder(false);
      });
  };
  const onChangeDelivery = (value) => {
    setDelivery(value);
  };

  React.useEffect(() => {
    currentStep(1);
  }, []);
  return (
    <div className='cart-step cart__order-form'>
      <div className='cart__order'>
        <h3>Ваш заказ</h3>
        <ol>
          {pizzas.map((item) => (
            <li key={item._id}>
              <span className='cart__order-item'>
                Пирог {item.name}, {item.size} см
              </span>
              <span className='cart__order-totalCount'>
                {items[item.filter].items.length} шт
              </span>
              <span className='cart__order-totalItem'>
                {items[item.filter].totalPrice}&nbsp;₽
              </span>
            </li>
          ))}
        </ol>
        <p className='cart__order-total'>
          Итого <span>{totalPrice} ₽ </span>
        </p>
      </div>

      <Form
        size='medium'
        name='cart__form'
        className='cart__form'
        initialValues={{
          remember: true,
          delivery: "Доставка",
          adressShop: "г.Шахты, ул. Ленина 89",
        }}
        layout='vertical'
        onFinish={onFinish}
        validateTrigger='onBlur'>
        <Form.Item
          label='Ваше имя'
          name='name'
          rules={[{ required: true, message: "Введите Ваше имя" }]}
          hasFeedback>
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Ваше имя'
          />
        </Form.Item>
        <Form.Item
          name='delivery'
          label='Доставка или самовывоз?'
          rules={[{ required: true, message: "Выберите тип доставки" }]}
          hasFeedback>
          <Select
            clearIcon={<CarOutlined className='site-form-item-icon' />}
            onChange={onChangeDelivery}>
            <Option value='Доставка'>Доставка</Option>
            <Option value='Самовывоз'>Самовывоз</Option>
          </Select>
        </Form.Item>
        {delivery === "Самовывоз" ? (
          <Form.Item
            label='Откуда удобно забрать заказ?'
            name='adressShop'
            rules={[{ required: true, message: "Выберите место самовывоза" }]}
            hasFeedback>
            <Select clearIcon={<CarOutlined className='site-form-item-icon' />}>
              <Option value='г.Шахты, ул. Ленина 89'>
                г.Шахты, ул. Ленина 89
              </Option>
              <Option value='г.Шахты, ул. Фрунзе 36'>
                г.Шахты, ул. Фрунзе 36
              </Option>
              <Option value='г.Новошахтинск, ул. Центральная 8'>
                г.Новошахтинск, ул. Центральная 8
              </Option>
            </Select>
          </Form.Item>
        ) : (
          <div className='cart__form-adress'>
            <p className='cart__form-adress-title'>
              <HomeOutlined className='site-form-item-icon' />
              Адрес доставки
            </p>
            <Form.Item
              label='Улица'
              className='cart__form-adress-item'
              name='ulicaDelivery'
              rules={[{ required: true, message: "Введите улицу" }]}
              hasFeedback>
              <Input placeholder='Введите улицу' />
            </Form.Item>
            <Form.Item
              className='cart__form-adress-item'
              label='Дом'
              name='domDelivery'
              rules={[{ required: true, message: "Введите дом" }]}
              hasFeedback>
              <Input placeholder='Введите дом' />
            </Form.Item>
            <Form.Item
              className='cart__form-adress-item'
              label='Подъезд'
              name='podyezdDelivery'>
              <Input placeholder='Укажите если есть' />
            </Form.Item>
            <Form.Item
              className='cart__form-adress-item'
              label='Квартира или офис'
              name='kvartiraDelivery'>
              <Input placeholder='Укажите если есть' />
            </Form.Item>
            <Form.Item
              className='cart__form-adress-item'
              label='Дофомон'
              name='domofonDelivery'>
              <Input placeholder='Укажите код если есть' />
            </Form.Item>
          </div>
        )}
        <Form.Item
          label='Как с вами связаться?'
          name='phone'
          rules={[
            {
              validator: (_, value) =>
                /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(
                  value
                )
                  ? Promise.resolve()
                  : Promise.reject(new Error("Не верно введен телефон!")),
            },
          ]}
          hasFeedback>
          <Input
            prefix={<PhoneOutlined />}
            type='phone'
            placeholder='+7(___) ___-__-__'
          />
        </Form.Item>
        <Form.Item label='Комментарий' name='comment'>
          <Input.TextArea
            placeholder='Предпочтения,время доставки...'
            allowClear
            autoSize={{ maxRows: 3 }}
          />
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error(
                        "Необходимо потвердить политику обработки данных"
                      )
                    ),
            },
          ]}>
          <Checkbox>
            Согласен с <a href='#'>политикой обработки песональных данных</a>
          </Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 24 }}
          className='cart__form__btns cart__bottom-buttons'>
          <Link to='/cart'>
            <Button
              onClick={stepAction.prev}
              className='button--add go-back-btn'
              outline>
              <svg
                width='8'
                height='14'
                viewBox='0 0 8 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M7 13L1 6.93015L6.86175 1'
                  stroke='#D3D3D3'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span> Назад в корзину</span>
            </Button>
          </Link>
          <Button
            type='primary'
            loading={sendOrder}
            htmlType='submit'
            className='pay-btn'>
            Подтвердить заказ
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CartForm;
