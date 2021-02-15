import React, { useState, useEffect } from "react";
import '../App.css'
import * as ProductServices from '../services/product-services'
import Header from '../components/header'
import Product from '../components/product'
import ProductModel from '../model/productModel'
import { useHistory, useParams } from 'react-router-dom'
import './productlist.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductListPage = () => {
    const history = useHistory();
    let { id }: any = useParams();
    const [products, setproducts] = useState<ProductModel[]>([]);
    const [title, settitle] = useState<string>("")
    useEffect(() => {
        if (id != undefined) {
            ProductServices.getSpesificCategories(id).then((data) => {
                setproducts(data)
                settitle(id)
            })
        }
        else {
            ProductServices.getAllProducts().then((data) => {
                setproducts(data)
                settitle("All Products")
            })
        }
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="category-title text-capitalize">{title}</div>
                <hr />
                <ToastContainer />
                <div className="row">
                    {products.map((item: any) => {
                        return <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 product-cart">
                            <Product id={item.id} title={item.title} price={item.price} category={item.category} description={item.description} image={item.image}></Product>
                        </div>
                    })}
                </div>
                <div>
                    <div className="open-search">
                        <button onClick={() => {
                            history.push({ pathname: '/cart' });
                        }
                        }>Go to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductListPage;