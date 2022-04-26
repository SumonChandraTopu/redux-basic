import React from "react";
import { useSelector } from "react-redux";
import "./Navbar.css";
function Navbar() {

  const products = useSelector(state => state.products.count)
  return (
    <>
      <div className="navbar-container">
        <div className="logo">
          <h1>Logo</h1>
        </div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#"> Home</a>
          </li>
          <li>
            <a href="#"> About</a>
          </li>
          <li>
            <a href="#"> Store <span className="toolkit">{products}</span></a>
          </li>
          <li>
            <a href="#"> Prices</a>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
}

export default Navbar;
