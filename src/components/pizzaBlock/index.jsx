import React from "react";
import PropTypes from "prop-types";
import { Button } from "../";
import { Col } from "antd";
import classNames from "classnames";

function PizzaBlock({
  _id,
  name,
  image,
  price,
  types,
  sizes,
  onClickAddPizza,
  addedPizza,
}) {
  const availibleTypes = ["традиционное", "фирменное"];
  const availableSizes = [26, 30, 40];
  const [activeType, setActiveType] = React.useState(types[0]);
  const onSelectType = (idx) => {
    setActiveType(idx);
  };
  const [activeSize, setActiveSize] = React.useState(sizes[0]);
  const indexSize = sizes.indexOf(activeSize);
  const onSelectSize = (size) => {
    setActiveSize(size);
  };
  const onAddPizza = () => {
    const obj = {
      _id,
      name,
      image,
      price: price[indexSize],
      size: activeSize,
      type: activeType,
      typeText: availibleTypes[activeType],
      filter: `${_id}_${activeSize}_${activeType}`,
    };
    onClickAddPizza(obj);
  };

  return (
    <Col xs={24} sm={12} md={8} lg={6} className='pizza-block'>
      <img className='pizza-block__image' src={image} alt='Pizza' />
      <h4 className='pizza-block__title'>{name}</h4>
      <div className='pizza-block__selector'>
        <ul>
          {availibleTypes.map((item, index) => (
            <li
              key={item}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
              onClick={() => {
                onSelectType(index);
              }}>
              {item}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={`${size}__${index}`}
              className={classNames({
                active: activeSize === size,
                disabled: !sizes.includes(size),
              })}
              onClick={() => {
                onSelectSize(size);
              }}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>{price[indexSize]} ₽</div>
        <Button onClick={onAddPizza} className='button--add' outline>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>

          <span>Добавить</span>
          {addedPizza && <i>{addedPizza}</i>}
        </Button>
      </div>
    </Col>
  );
}
PizzaBlock.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.arrayOf(PropTypes.number),
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClickAddPizza: PropTypes.func.isRequired,
  addedPizza: PropTypes.number,
};
PizzaBlock.defaultProps = {
  name: "Название пирога",
  price: 0,
  types: [],
  sizes: [],
};
export default PizzaBlock;
