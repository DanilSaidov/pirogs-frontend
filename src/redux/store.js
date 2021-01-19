import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootStore from "./redusers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootStore, composeEnhancers(applyMiddleware(thunk)));
// redux devtools для отслеживания

// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;
