import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk"; // Named import instead of default
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { orderReducer } from "./Order/Reducer";
import { cartReducer } from "./Cart/Reducer";

const rootReducers = combineReducers({
    auth: authReducer,
    product:customerProductReducer,
    cart:cartReducer,
    order:orderReducer

});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
