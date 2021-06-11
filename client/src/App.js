import "./App.css";
import Errors from "./Pages/Errors/Errors";
import Landpage from "./Pages/Landpage/Landpage";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import PrivateRoute from "./router/PrivateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "./Redux/actions/user";
import ProductList from "./Pages/ProductList/ProductList";

import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import Description from "./Components/Description/Description";
import EditProduct from "./Components/EditProduct/EditProduct";
import AddProduct from "./Components/AddProduct/AddProduct";
import Search from "./Components/Search";
import MyOrders from "./Components/MyOrders/MyOrders";
import OrderAdmin from "./Components/OrderAdmin/OrderAdmin";
import Users from "./Components/Users/Users";
function App() {
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    useEffect(() => {
        dispatch(current());
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Landpage} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/profile" component={Profile} />
                <Route path="/products" component={ProductList} />
                <Route path="/ShoppingCart" component={ShoppingCart} />
                <Route path="/Description/:id" component={Description} />
                <Route path="/EditProduct" component={EditProduct} />
                <Route path="/AddProduct" component={AddProduct} />
                <Route path="/MyOrders" component={MyOrders} />
                <Route path="/OrderAdmin" component={OrderAdmin} />
                <Route path="/Users" component={Users} />
                <Route path="/*" component={Errors} />
            </Switch>
        </div>
    );
}

export default App;
