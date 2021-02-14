import React, { useState, useEffect } from "react";
import '../App.css'
import * as ProductServices from '../services/product-services'
import { useHistory } from 'react-router-dom'
import { Nav, Navbar} from "react-bootstrap";
const Header = () => {
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
              return <Nav.Link key={item} className="text-white mx-3 text-capitalize" href={"/category/" + item}>{item}</Nav.Link>
            })}
          </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div >
  );
}
export default Header;