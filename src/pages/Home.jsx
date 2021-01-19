import React from "react";
import { Catigories, SortPoupup, PizzaBlock, LoaderBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setFilters } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categoriesName = [
  "Мясные",
  "Вегирианские",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "Популярности", type: "popular", order: "desc" },
  { name: "Цене по убыванию", type: "price", order: "desc" },
  { name: "Цене по возрастанию", type: "price", order: "asc" },
  { name: "Алфавиту", type: "name", order: "asc" },
];
const Home = React.memo(function () {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const addedCart = useSelector(({ cart }) => cart.items);
  const { category, sortBy } = useSelector(({ filter }) => filter);
  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((idx) => {
    dispatch(setCategory(idx));
  }, []);
  const onSelectSort = React.useCallback((type) => {
    dispatch(setFilters(type));
  }, []);
  const handleAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj));
  };
  return (
    <div className='container'>
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
                addedPizza={addedCart[obj.id] && addedCart[obj.id].items.length}
                key={obj.id}
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
  );
});

export default Home;
