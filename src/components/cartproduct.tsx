import React, { useState, useEffect } from "react";
import '../App.css'
import { updateObjectBindingPattern } from "typescript";
import { Link, useHistory } from 'react-router-dom'
import { Button, Card } from "react-bootstrap";
import './product.css'
import * as ProductServices from '../services/product-services'

type ProductProps = {
    productId: number,
}
interface dm {
    'itemid': number,
    'quantity': number,
    'price': number,
    'image': string,
    'description': string,
    'title': string,
    'category': string,
}

const HomePage = ({ productId }: ProductProps) => {
    const [productData, setProductData] = useState<dm[]>([])
    useEffect(() => {


        // ProductServices.getSpesificPrice(productId).then(price => {

        //     let cartdata:any=[{
        //         'itemid': productId,
        //         'quantity': quantity,
        //         'price': price,
        //     }]
        //     setProductData(cartdata)
        // })

        ProductServices.getSpesificProduct(productId).then(data => {
            console.log(data)
            let cartdata: any = [{
                'itemid': productId,
                'price': data.price,
                'image': data.image,
                'description': data.description,
                'title': data.title,
                'category': data.category,

            }]
            setProductData(cartdata)
        })



    }, [])
    const history = useHistory();
    return (
        <div>
            
            {productData.map((item) => {
                return (
                    <div>
                        <div key={item.itemid} className="row">
                            <div className="col-2">
                                <img className="card-img-top mt-3" style={{ width: '50%', maxHeight: '160px', textAlign: 'center' }} src={item.image} alt="Card image cap" />
                            </div>
                            <div className="col-2 mt-4 productcart" onClick={() => {
                    history.push('/product/'+item.itemid);
                }
                }>{item.title}</div>
                            <div className="col-2 mt-3">
                                <span style={{fontSize:'10px'}}>{item.description}</span>
                                </div>
                            <div className="col-2 mt-5">{item.category}</div>
                            <div className="col-1 mt-5">{item.price}</div>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>

    );
}
export default HomePage;