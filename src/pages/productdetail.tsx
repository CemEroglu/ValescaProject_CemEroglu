import React, { useState, useEffect } from "react";
import '../App.css'
import * as ProductServices from '../services/product-services'
import Header from '../components/header'
import { useHistory, useParams } from 'react-router-dom'
import { Button } from "react-bootstrap";
import './productdetail.css'
interface detail {
    'itemid': number,
    'price': number,
    'image': string,
    'description': string,
    'title': string,
    'category': string,
}
const ProductDetailPage = () => {
    const history = useHistory();
    let { id }: any = useParams();
    const [productData, setproductData] = useState<detail>();
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
    const addToCart = (id: any) => {
        if (productData && productData.itemid && productData.price && productData.image && productData.description && productData.title && productData.category) {
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
                    "title": productData.title,
                    "price": productData.price,
                    "category": productData.category,
                    "description": productData.description,
                    "image": productData.image,
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
                        "title": productData.title,
                        "price": productData.price,
                        "category": productData.category,
                        "description": productData.description,
                        "image": productData.image,
                        "quantity": 1
                    })
                }
                else {
                    newarray[duplicatedindex] = {
                        "id": id,
                        "title": productData.title,
                        "price": productData.price,
                        "category": productData.category,
                        "description": productData.description,
                        "image": productData.image,
                        "quantity": newarray[duplicatedindex].quantity + 1,
                    }
                }
                cartdata = newarray
            }
            sessionStorage.setItem('cartdata', JSON.stringify(cartdata))
        }
    }
    return (
        <div>
            <Header></Header>
            <div className="container">
                {productData && productData.itemid && productData.price && productData.image && productData.description && productData.title && productData.category ? (
                    <div>
                        <div key={productData.itemid} className="row mt-5 pl-0">
                            <div className="col-4">
                                <img className="card-img-top mt-3" src={productData.image}/>
                            </div>

                            <div className="col-6 ml-5 ">
                                <div className="row my-2"><span className="product-detail-title">
                                    {productData.title}</span>
                                    </div>
                                <div className="row mb-2"><span  className="product-detail-description" >{productData.description}</span></div>
                                <div className="row text-uppercase"><a href={"/category/" + productData.category} ><span  className="product-detail-category">{productData.category}</span></a>
                                </div>
                                <div className="row mb-2"><span className="product-detail-price">Price: {productData.price}</span></div>
                                <div className="row ">
                                    <Button onClick={() => { addToCart(productData.itemid) }} className="add-to-cart-button">Add to Cart</Button>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                ) : (<div>Error, please try another time.</div>)}
                <div>
                    <div className="open-search">
                        <button onClick={() => {
                            history.push('/cart');
                        }
                        }>Go to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductDetailPage;