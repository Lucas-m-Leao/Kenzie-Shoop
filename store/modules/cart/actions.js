import { ADD_CART, REMOVE_CART } from "./actionsTypes";

export const addCart = (products) => ({
    type: ADD_CART,
    products
})

export const removeCart = (products) => ({
    type: REMOVE_CART,
    products
})