import React from "react";
import '../App.css'
import { Link, useHistory } from 'react-router-dom'
import { Button, Card } from "react-bootstrap";
import './product.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type ProductProps = {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string,
}
const Product = ({ id, title, price, category, description, image }: ProductProps) => {
    const history = useHistory();
    const addToCart = (id: any) => {
        let cartdata: any = sessionStorage.getItem('cartdata')
        if (cartdata) {
            cartdata = JSON.parse(cartdata)
        }
        else {
            cartdata = []
        }
        if (cartdata.length == 0) {
            cartdata = [{
                "id": id,
                "title": title,
                "price": price,
                "category": category,
                "description": description,
                "image": image,
                "quantity": 1,
            }]
        }
        else {
            let duplicate = 0;
            let duplicatedindex = -1;
            let newarray = [...cartdata]
            newarray.map((item, index) => {
                if (item.id == id) {
                    duplicate = 1
                    duplicatedindex = index
                }
            })
            if (!duplicate) {
                newarray.push({
                    "id": id,
                    "title": title,
                    "price": price,
                    "category": category,
                    "description": description,
                    "image": image,
                    "quantity": 1
                })
            }
            else {
                newarray[duplicatedindex] = {
                    "id": id,
                    "title": title,
                    "price": price,
                    "category": category,
                    "description": description,
                    "image": image,
                    "quantity": newarray[duplicatedindex].quantity + 1,
                }
            }
            cartdata = newarray
        }
        sessionStorage.setItem('cartdata', JSON.stringify(cartdata))
        toast('🛒The product is added to your cart.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }
    return (
        <div className="mx-2 my-3" style={{ height: '400px' }}>
            <div className="card text-center" style={{ width: "18px;" }}>
                <div onClick={() => { history.push('/product/' + id); }} style={{ height: '200px' }}>
                    <div style={{ height: '200px', maxWidth: '200' }}>
                        <img className="card-img-top mt-5 product-image" src={image} />
                    </div>
                </div>
                <div className="card-body" style={{ height: '200px' }}>
                    <h5 onClick={() => { history.push('/product/' + id); }} style={{ height: '50px' }} className="card-title">
                        <div className="product-title">{title}</div>
                    </h5>
                    <p onClick={() => { history.push('/product/' + id); }} className="card-text">Price: {price}</p>
                    <Button onClick={() => { addToCart(id) }} style={{ background: 'rgb(0,121,215)' }}>Add to Cart</Button>
                </div>
            </div>
        </div>

    );
}
export default Product;