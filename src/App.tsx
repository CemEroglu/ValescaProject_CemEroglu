import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";	
import productlist from './pages/productlist'
import cart from './pages/cartpage'
import productdetail from './pages/productdetail'
import 'bootstrap/dist/css/bootstrap.css';
const Project = () => {
  
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={productlist} />
                <Route path="/category/:id" exact component={productlist} />
                <Route path="/allproducts" exact component={productlist} />
                <Route path="/product/:id" exact component={productdetail} />
                <Route path="/cart" exact component={cart} />
            </Switch>
        </Router>
    );
}
export default Project;