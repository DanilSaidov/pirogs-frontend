import React from "react";
import { Result } from "antd";
import { Button } from "components";
import { useHistory } from "react-router-dom";

function CartDone({ currentStep, onClearCart }) {
  const history = useHistory();
  const onBackHome = () => {
    history.push("/");
  };
  React.useEffect(() => {
    currentStep(3);
    onClearCart();
  }, []);
  return (
    <Result
      status='success'
      title='Ваш заказ принят!'
      subTitle='В блиайшее время Вам перезвонит наш сотрудник и подтвердит заказ'
      extra={[
        <Button
          type='link'
          key='goToHome'
          onClick={onBackHome}
          className='button--add go-back-btn'
          outline>
          На главную
        </Button>,
      ]}
    />
  );
}

export default CartDone;
