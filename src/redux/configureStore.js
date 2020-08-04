import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./user/userReducer";
import usersReducer from "./users/usersReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      users: usersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
