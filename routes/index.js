import { Route, Switch } from "react-router-dom"
import Cart from "../pages/Cart"
import Home from "../pages/home"
import Login from "../pages/Login"
import Register from "../pages/register"

const Routes = () => {
    return (
        <Switch>
            <Route path={"/register"}>
                <Register />
            </Route>
            <Route path={"/login"}>
                <Login />
            </Route>
            <Route path={"/cart"}>
                <Cart />
            </Route>
            <Route path={"/"}>
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes