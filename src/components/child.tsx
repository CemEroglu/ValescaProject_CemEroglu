import React, { useState, useEffect } from "react";
import '../App.css'
import { updateObjectBindingPattern } from "typescript";
import { Link, useHistory } from 'react-router-dom'
import { Button, Card } from "react-bootstrap";
import './product.css'

type ProductProps = {
    title: string,
    setTitle: Function,
}
const HomePage = ({  title, setTitle }: ProductProps) => {
    const history = useHistory();
    return (
        <div className="mx-2 my-3" style={{ height: '400px' }}>

           {title}
                    <Button onClick={()=>{setTitle("denem")}} style={{background:'rgb(0,121,215)'}}>Buy</Button>
               
           

        </div>

    );
}
export default HomePage;