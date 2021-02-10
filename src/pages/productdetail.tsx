import React, { useState, useEffect } from "react";
import '../App.css'
import { updateObjectBindingPattern } from "typescript";
import * as ProductServices from '../services/product-services'
import Header from '../components/header'
import Product from '../components/product'
import ProductModel from '../model/productModel'
import { IoCart } from "react-icons/io5";


import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { Button } from "react-bootstrap";
interface dm {
    'itemid': number,
    'price': number,
    'image': string,
    'description': string,
    'title': string,
    'category': string,
}


const HomePage = () => {
    const history = useHistory();
    let { id }: any = useParams();
    const [productData, setproductData] = useState<dm>();
    useEffect(() => {
        ProductServices.getSpesificProduct(id).then(data => {
            let cartdata: any = {
                'itemid': id,
                'price': data.price,
                'image': data.image,
                'description': data.description,
                'title': data.title,
                'category': data.category,

            }
            setproductData(cartdata)
        })
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container">

                {productData && productData.itemid && productData.price && productData.image && productData.description && productData.title && productData.category ? (
                    <div>
                        <div key={productData.itemid} className="row mt-5 pl-0">
                            <div className="col-4">
                                <img className="card-img-top mt-3" src={productData.image} alt="Card image cap" />
                            </div>

                            <div className="col-6 ml-5 ">
                                <div className="row my-2"><span style={{ fontSize: '30px' }}>
                                    {productData.title}</span></div>
                                <div className="row mb-2"><span style={{ fontSize: '13px' }}>{productData.description}</span></div>
                                <div className="row text-uppercase"><a href={"/category/" + productData.category} ><span style={{ fontSize: '20px' }}>{productData.category}</span></a>
                                </div>
                                <div className="row mb-2"><span style={{ fontSize: '27px' }}>Price: {productData.price}</span></div>
                                <div className="row ">
                                    <Button style={{background:'rgb(0,121,215)'}}>Buy</Button>
                                </div>
                            </div>

                            {/* 
                        <div className="col-2 mt-4 font-weight-bold">
                        <span style={{fontSize:'20px'}}>
                            {productData.title}</span></div>
                        <div className="col-2 mt-3">
                            <span style={{fontSize:'10px'}}>{productData.description}</span>
                            </div>
                        <div className="col-2 mt-5">{productData.category}</div>
                        <div className="col-1 mt-5">{productData.price}</div> */}
                        </div>
                        <hr />
                    </div>
                ) : (<div>Error, please try another time.</div>)}



                <div>
                    <div className="open-search">
                        <button onClick={() => {
                            history.push('/cart');
                        }
                        }>Add a book</button>
                        {/* <Link className="open-search" to='/search'>Add a book</Link> */}
                    </div>

                </div>
            </div>
        </div>



    );
}
export default HomePage;