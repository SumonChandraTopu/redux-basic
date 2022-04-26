import React from "react";
import "./Home.css";
import Navbar from "../components/nav/Navbar";
import { useDispatch } from "react-redux";
import { increment } from "../features/products/productsSlice";
import Product from "../components/products/Product";
function Home() {
    const dispatch = useDispatch()
  return (
    <div>
      <Navbar />
      <div className="btn">
          <button onClick={() => dispatch(increment())}>Click</button>
          <Product />
      </div>
      
    </div>
  );
}

export default Home;
