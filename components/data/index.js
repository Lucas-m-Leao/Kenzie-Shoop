import axios from "axios";

const Api = axios.create({
    baseURL: "https://kenzieshopapi.herokuapp.com/"
})

export default Api
