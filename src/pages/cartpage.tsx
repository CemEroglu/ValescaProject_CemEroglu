import React, { useState, useEffect } from "react";
import '../App.css'
import { updateObjectBindingPattern } from "typescript";
import * as ProductServices from '../services/product-services'
import * as CartServices from '../services/cart-services'
import Header from '../components/header'
import Product from '../components/product'
import ProductModel from '../model/productModel'
import CartModel from '../model/cartModel'
import { IoCart } from "react-icons/io5";
import CardProduct from '../components/cartproduct'


import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { Button, NavItem } from "react-bootstrap";
interface IState {
    message?: any;
  }
const HomePage = () => {
    const location = useLocation();
    const message = (location.state as IState).message;
    const history = useHistory();
    let { id }: any = useParams();
    const [cartproducts, setcartproducts] = useState<CartModel[]>([]);
    const [isLoading, setisLoading] = useState(false)
    const [total, settotal] = useState<number>();

    useEffect(() => {
        CartServices.get(1).then((data) => {
            //console.log(data.products)
            setcartproducts(data.products);

        })
        let total=0;
        message.map((item:any)=>{
           let nprice=parseFloat(item.price);
           total=total+nprice
        })
        settotal(total);
    }, [])





    return (
        <div>
            <Header></Header>
            <div className="container">
               <Button onClick={()=>{
                   console.log(total)
               }}>ST</Button>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-2 mt-5 font-weight-bold">Title</div>
                    <div className="col-2 mt-5 font-weight-bold">Description</div>
                    <div className="col-2 mt-5 font-weight-bold">Category</div>
                    <div className="col-1 mt-5 mx-0 px-0 font-weight-bold">Unit Price</div>
                </div>
                <hr />
                {message.map((item: any) => {
                    return (<CardProduct productId={item.id} ></CardProduct>)
                })}
                {/* <li>{cartproducts[0].price}</li> */}

                <div className="row">
                <div className="col-8"></div>
                <div className="col-4">{total}</div>
                </div>
            </div>
        </div>



    );
}
export default HomePage;