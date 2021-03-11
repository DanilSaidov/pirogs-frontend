import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Footer, Header } from "./components";
import { Home, Cart, Delivery, Contacts } from "./pages";
import { fetchPizzas, fetchCategories } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();
  const { category, sortBy } = useSelector(({ filter }) => filter);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className='wrapper'>
      <Route exact path='/'>
        <Header />
        <Home category={category} sortBy={sortBy} />
      </Route>
      <Route path='/cart'>
        <Header className='header-cart' />
        <Cart />
      </Route>
      <Route path='/delivery'>
        <Header className='header-bg' />
        <Delivery />
      </Route>
      <Route path='/contacts'>
        <Header className='header-bg' />
        <Contacts />
      </Route>
      <Footer />
    </div>
  );
}
export default App;
