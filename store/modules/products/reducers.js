import { ADD_Products } from "./actionsTypes"

const ProductsReduce = (state = [], actions) => {
    switch (actions.type) {
        case ADD_Products:
            return actions
        default:
            return state
    }
}

export default ProductsReduce