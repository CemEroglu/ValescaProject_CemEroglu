import React, { useState, useEffect } from "react";
import '../App.css'
import { useHistory } from 'react-router-dom'
import './product.css'
type ProductProps = {
    data: any,
}
interface detail {
    'id': number,
    'quantity': number,
    'price': number,
    'image': string,
    'description': string,
    'title': string,
    'category': string,
}

const CartProduct = ({ data }: ProductProps) => {
    const [productData, setProductData] = useState<detail[]>([])
    useEffect(() => {
        let cartdata: any = [{
            'id': data.id,
            'quantity': data.quantity,
            'price': data.price,
            'image': data.image,
            'description': data.description,
            'title': data.title,
            'category': data.category,
        }]
        setProductData(cartdata)
    }, [])
    const history = useHistory();
    return (
        <div>
            {productData.map((item) => {
                return (
                    <div key={item.id}>
                        <div key={item.id} className="row">
                            <div className="col-2">
                                <img className="card-img-top mt-3" style={{ width: '50%', maxHeight: '160px', textAlign: 'center' }} src={item.image} alt="Card image cap" />
                            </div>
                            <div className="col-2 mt-4 productcart" onClick={() => {
                                history.push('/product/' + item.id);
                            }
                            }>{item.title}</div>
                            <div className="col-2 text-center mt-5">{item.category}</div>
                            <div className="col-2 text-center mt-5">{item.price}</div>
                            <div className="col-2 text-center mt-5">{item.quantity}</div>
                            <div className="col-2 text-center mt-5">{item.quantity * item.price}</div>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>
    );
}
export default CartProduct;