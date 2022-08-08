import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CartReduce from "./modules/cart/reducers";
import ProductsReduce from "./modules/products/reducers";

const reducers = combineReducers({
    Products: ProductsReduce,
    CartProducts: CartReduce
})
const store = createStore(reducers, applyMiddleware(thunk))

export default store