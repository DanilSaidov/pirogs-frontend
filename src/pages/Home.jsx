import React from "react";
import { notification } from "antd";
import {
  Catigories,
  SortPoupup,
  PizzaBlock,
  LoaderBlock,
  Slider,
  Steps,
} from "../components";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setFilters } from "../redux/actions/filters";
import { addPizzaToCart } from "../redux/actions/cart";

const sortItems = [
  { name: "Популярности", type: "rating", order: "desc" },
  { name: "Цене по убыванию", type: "price", order: "desc" },
  { name: "Цене по возрастанию", type: "price", order: "asc" },
  { name: "Алфавиту", type: "name", order: "asc" },
];
const Home = React.memo(function ({ sortBy, category }) {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const addedCart = useSelector(({ cart }) => cart.items);

  const categoriesName = useSelector(({ pizzas }) => pizzas.categories);

  const onSelectCategory = React.useCallback((idx) => {
    dispatch(setCategory(idx));
  }, []);
  const onSelectSort = React.useCallback((type) => {
    dispatch(setFilters(type));
  }, []);
  const handleAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj));
    const msg = `Пирог "${obj.name}", ${obj.size}см, ${obj.typeText} тесто  `;
    openNotification(msg);
  };

  const openNotification = (msg) => {
    notification.open({
      message: "Добавлено в корзину",
      description: msg,
      placement: "topLeft",
      duration: 2.5,
      icon: (
        <ShoppingCartOutlined style={{ color: "#d49439", fontSize: "25px" }} />
      ),
    });
  };
  return (
    <div className='home'>
      <Slider />
      <div className='container'>
        <div className='content'>
          <div className='content__top'>
            <Catigories
              items={categoriesName}
              onClickCategory={onSelectCategory}
              activeCategory={category}
            />
            <SortPoupup
              activeSortType={sortBy.type}
              activeSortOrder={sortBy.order}
              items={sortItems}
              clickSortType={onSelectSort}
            />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {isLoaded
              ? items.map((obj) => (
                  <PizzaBlock
                    onClickAddPizza={handleAddPizza}
                    addedPizza={
                      addedCart[obj.id] && addedCart[obj.id].items.length
                    }
                    key={obj._id}
                    {...obj}
                  />
                ))
              : Array(12)
                  .fill(0)
                  .map((_, idx) => (
                    <LoaderBlock className='pizza-block' key={idx} />
                  ))}
          </div>
        </div>
      </div>
      <Steps />
    </div>
  );
});

export default Home;
