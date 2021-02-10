import React, { useState, useEffect } from "react";
import '../App.css'
import { updateObjectBindingPattern } from "typescript";
import * as ProductServices from '../services/product-services'
import Header from '../components/header'
import Product from '../components/product'
import ProductModel from '../model/productModel'
import { IoCart } from "react-icons/io5";
import Child from '../components/child'


import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { Button } from "react-bootstrap";

type cartarray ={
    id: number,
    amount: number,
    totalprice: number
}

const HomePage = () => {
    const history = useHistory();
    let { id }: any = useParams();
    const [products, setproducts] = useState<ProductModel[]>([]);
    const [title, setTitle] = useState("");
    const [cartarray, setcartarray] = useState<cartarray[]>([])
    useEffect(() => {
        if(id!=undefined){
        ProductServices.getSpesificCategories(id).then((data) => {
            setproducts(data)
        })
    }
    else{
        ProductServices.getAllProducts().then((data) => {
            setproducts(data)
        })
    }
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container">
            <div className="row">
            {products.map((item: any) => {
                return <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 productcart" style={{height:450}}>
                    <Product cartarray={cartarray} setcartarray={setcartarray.bind(this)} id={item.id} title={item.title} price={item.price} category={item.category} description={item.description} image={item.image}></Product>
                </div>
            })}
            </div>
            <div>
            <div className="open-search">
                <button onClick={() => {
                    history.push({pathname:'/cart',state:{message:cartarray}});
                }
                }>Go to Cart</button>
                {/* <Link className="open-search" to='/search'>Add a book</Link> */}
            </div>
            
            </div>
            </div>
        </div>



    );
}
export default HomePage;