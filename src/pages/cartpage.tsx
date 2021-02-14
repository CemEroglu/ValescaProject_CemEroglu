import React, { useState, useEffect } from "react";
import '../App.css'
import Header from '../components/header'
import CartModel from '../model/cartModel'
import CardProduct from '../components/cartproduct'

const CartPage = () => {
    const [cartdata, setcartdata] = useState<CartModel[]>([]);
    const [total, settotal] = useState<number>();
    useEffect(() => {
        let data: any = sessionStorage.getItem('cartdata');
        data = JSON.parse(data);
        setcartdata(data)
        let total = 0;
        if (data) {
            data.map((item: any) => {
                let nprice = parseFloat(item.price);
                nprice = nprice * item.quantity
                total = total + nprice
                total = parseFloat(total.toFixed(2))
            })
        }
        settotal(total);
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-2 mt-5 text-center font-weight-bold">Title</div>
                    <div className="col-2 mt-5 text-center font-weight-bold">Category</div>
                    <div className="col-2 mt-5 text-center mx-0 px-0 font-weight-bold">Unit Price</div>
                    <div className="col-2 mt-5 text-center mx-0 px-0 font-weight-bold">Quantity</div>
                    <div className="col-2 mt-5 text-center mx-0 px-0 font-weight-bold">Price</div>
                </div>
                <hr />
                {cartdata ?
                    cartdata.map((item: any) => {
                        return (<CardProduct key={item.id} data={item} ></CardProduct>)
                    }) : (
                        <div>Your Cart is empty :(</div>
                    )}
                <div className="row mb-5">
                    <div className="col-9"></div>
                    <div className="col-2 text-right font-weight-bold">Total Price:</div>
                    <div className="col-1 text-center">{total}</div>
                </div>
            </div>
        </div>
    );
}
export default CartPage;