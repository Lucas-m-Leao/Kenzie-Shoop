import { addCart, removeCart } from "./actions"

export const addCartThunk = (data) => (dispath, getstate) => {
    const { CartProducts } = getstate()
    localStorage.setItem("@kenzieShopeCard", JSON.stringify([...CartProducts, data]))
    const storege = JSON.parse(localStorage.getItem("@kenzieShopeCard"))
    dispath(addCart(storege))

}
export const removeProductThunk = (id) => (dispath, getstate) => {
    const { CartProducts } = getstate()
    const newList = CartProducts.filter(element => element.id !== id)
    localStorage.setItem("@kenzieShopeCard", JSON.stringify(newList))
    const storege = JSON.parse(localStorage.getItem("@kenzieShopeCard"))
    dispath(removeCart(storege))
}