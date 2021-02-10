import React, { useState, useEffect, ReactPropTypes } from "react";
import '../App.css'
import { updateObjectBindingPattern } from "typescript";
import { Link, useHistory } from 'react-router-dom'
import { Button, Card } from "react-bootstrap";
import './product.css'
import PropTypes from 'prop-types';

type ProductProps = {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string,
    cartarray: any,
    setcartarray: Function,
}

const HomePage = ({ id, title, price, category, description, image, cartarray, setcartarray }: ProductProps) => {
    const history = useHistory();
    // const [amount, setamount] = useState<number>()
    const addToCart = (cartarray: any) => {
        //console.log(cartarray)
       
        if (cartarray.length == 0) {
            setcartarray([{
                "id": id,
                "title":title, 
                "price":price, 
                "category":category, 
                "description":description, 
                "image":image,
            }])
        }
        else {
            let dublicate = 0;
            let newarray = [...cartarray]
            newarray.map((item, index) => {
                if (item.id == id) {
                    dublicate=1
                }
            })
            if(!dublicate){
                newarray.push({
                "id": id,
                "title":title, 
                "price":price, 
                "category":category, 
                "description":description, 
                "image":image,})
            } 
            setcartarray(newarray)  
        }
    }
    return (
        <div className="mx-2 my-3" style={{ height: '400px' }}>

            <div className="card text-center" style={{ width: "18rem;" }}>
                <div onClick={() => { history.push('/product/' + id); }} style={{ height: '200px' }}>
                    <div style={{ height: '200px', maxWidth: '200' }}>
                        <img className="card-img-top mt-5" style={{ width: '50%', maxHeight: '160px', textAlign: 'center' }} src={image} alt="Card image cap" />
                    </div>
                </div>
                <div className="card-body" style={{ height: '200px' }}>
                    <h5 onClick={() => { history.push('/product/' + id); }} style={{ height: '50px' }} className="card-title"><div className="erol">{title}</div></h5>
                    <p onClick={() => { history.push('/product/' + id); }} className="card-text">Price: {price}</p>
                    {/* <a href="#" className="btn btn-primary">Buy</a> */}
                    {/* <div className="row">
                        <input
                            type="number"
                            className="form-control col-4 mx-3"
                            id="formGroupExampleInput"
                            value={amount}
                            onChange={event => {
                                const e = event.target.value
                                var number = parseInt(e, 10);

                                setamount(number)
                            }}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Lütfen ne için kullanılacağına dair bir açıklama giriniz."
                        /> */}
                        <Button onClick={() => { addToCart(cartarray) }} style={{ background: 'rgb(0,121,215)' }}>Add to Cart</Button>
                    {/* </div> */}
                </div>
            </div>

        </div>

    );
}
export default HomePage;