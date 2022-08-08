import { ADD_Products } from "./actionsTypes";

export const addProducts = (products) => ({
    type: ADD_Products,
    products
})