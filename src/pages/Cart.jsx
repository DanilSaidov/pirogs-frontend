import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Modal, Steps } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  SmileOutlined,
} from "@ant-design/icons";

import { CartEmpty, CartContent, CartForm, CartDone } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  cartRemoveItem,
  cartMinusItem,
  cartPlusItem,
  newOrder,
} from "../redux/actions/cart";

const { Step } = Steps;

function Cart() {
  const dispatch = useDispatch();
  const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);
  const pizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });
  const [step, setStep] = React.useState(0);
  const stepAction = {
    next() {
      setStep(step + 1);
    },
    prev() {
      setStep(step - 1);
    },
  };
  const currentStep = (step) => {
    setStep(step);
  };
  const clickCartMinusItem = (id) => {
    dispatch(cartMinusItem(id));
  };
  const clickCartPlusItem = (id) => {
    dispatch(cartPlusItem(id));
  };
  const confirmOrder = (item) => dispatch(newOrder(item));

  const [modalVisible, setModalVisible] = React.useState(false);
  const onDeleteCartItem = (id) => {
    dispatch(cartRemoveItem(id));
  };
  const onClearCart = () => {
    dispatch(clearCart());
    setModalVisible(false);
  };
  const handlerModalOpen = (id) => {
    setModalVisible(true);
    modalOpen(id);
  };
  const handlerModalClose = () => {
    setModalVisible(false);
  };

  const modalOpen = () => {
    const text = "Очистить корзину?";
    Modal.confirm({
      title: text,
      visible: modalVisible,
      onOk: onClearCart,
      onCancel: handlerModalClose,
      okText: "Удалить",
      cancelText: "Отмена",
      maskClosable: true,
      okButtonProps: { className: "button--outline", type: "link" },
      cancelButtonProps: { className: "button--outline", type: "link" },
      autoFocusButton: null,
    });
  };

  return (
    <div className='cart'>
      <div className='container'>
        <Steps current={step} className='cart__steps'>
          <Step title='Ваш выбор' icon={<UserOutlined />} />
          <Step title='Оформление заказа' icon={<SolutionOutlined />} />
          <Step title='Пирог готовится!' icon={<SmileOutlined />} />
        </Steps>

        <Route exact path='/cart'>
          <div className='cart-step cart-default' data-step={step}>
            {totalCount ? (
              <CartContent
                pizzas={pizzas}
                totalCount={totalCount}
                totalPrice={totalPrice}
                onDeleteCartItem={onDeleteCartItem}
                clickCartMinusItem={clickCartMinusItem}
                clickCartPlusItem={clickCartPlusItem}
                handlerModalOpen={handlerModalOpen}
                stepAction={stepAction}
                items={items}
                currentStep={currentStep}
              />
            ) : (
              <CartEmpty />
            )}
          </div>
        </Route>

        <Route exact path='/cart/order'>
          {totalCount ? (
            <CartForm
              stepAction={stepAction}
              currentStep={currentStep}
              pizzas={pizzas}
              totalPrice={totalPrice}
              items={items}
              confirmOrder={confirmOrder}
            />
          ) : (
            <Redirect to='/cart' />
          )}
        </Route>

        <Route exact path='/cart/done'>
          {totalCount || step === 3 ? (
            <div className='cart-step cart__done' data-step={step}>
              <CartDone currentStep={currentStep} onClearCart={onClearCart} />
            </div>
          ) : (
            <Redirect to='/cart' />
          )}
        </Route>
      </div>
    </div>
  );
}

export default Cart;
