import React, { useState, useEffect } from "react";
import '../App.css'
import { updateObjectBindingPattern } from "typescript";

import * as ProductServices from '../services/product-services'

import { Link, useHistory } from 'react-router-dom'
import { Nav, Navbar, Form, FormControl, Button, NavDropdown } from "react-bootstrap";


const HomePage = () => {
  const history = useHistory();
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    ProductServices.getAllCategories().then((data) => {
      setcategories(data)
    })
  }, [])
  return (
    <div>

      <Navbar bg="primary" expand="lg">
        <Navbar.Brand className="text-white" href="/">Valesca Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-5 mr-auto">
            {categories.map((item) => {
              return <Nav.Link key={item} className="text-white mx-3" href={"/category/" + item}>{item}</Nav.Link>
            })}

          </Nav>
          
          
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Go to card</NavDropdown.Item>
          </NavDropdown>
          
          {/* <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div> */}


        </Navbar.Collapse>
      </Navbar>
    </div >
  );
}
export default HomePage;