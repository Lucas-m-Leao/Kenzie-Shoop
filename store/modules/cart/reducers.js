import { ADD_CART, REMOVE_CART } from "./actionsTypes";
const store = JSON.parse(localStorage.getItem("@kenzieShopeCard"))
const CartReduce = (state = store || [], actions) => {
    switch (actions.type) {
        case ADD_CART:
            return actions.products
        case REMOVE_CART:
            return actions.products
        default:
            return state
    }
}

export default CartReduce
