import Api from "../../../components/data"
import { addProducts } from "./actions"
export const addProductsThunk = (data) => (dispatch) => {
    Api.get("/food")
        .then((res) => {
            const filter = res.data.filter((element) => {
                if (element.name.toLowerCase().includes(data)) {
                    return element
                } else if (!data) {
                    return element
                }
            })
            dispatch(addProducts(filter))
        })
}