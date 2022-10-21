import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { addToDb } from "../../utilities/fakedb";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/product?page=${page}&size=${size}`)
      .then((data) => setProducts(data.data));
  }, [page, size]);

  useEffect(() => {
    axios.get("http://localhost:5050/productCount").then((res) => {
      const count = res.data.count;
      const pages = Math.ceil(count / 10);
      setPageCount(pages);
    });
  }, []);

  const handleAddProduct = (product) => {
    console.log(cart, product);
    const exists = cart.find((pd) => pd._id === product._id);
    if (!exists) {
      const newCart = [...cart, product];
      setCart(newCart);
      addToDb(product._id);
      console.log(cart, newCart);
    } else {
      alert("already added");
    }
  };
  return (
    <div className="shop-container">
      <div>
        <div className="product-container">
          {products?.map((product) => (
            <Product
              handleAddProduct={handleAddProduct}
              product={product}
              key={product?._id}
            />
          ))}
        </div>
        <div className="d-flex justify-content-center pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={page === number ? "selected" : ""}
              onClick={() => setPage(number)}
              key={number}
            >
              {number + 1}
            </button>
          ))}
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="10" selected>
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <div className="cart-container p-3">
        {cart && (
          <Cart cart={cart}>
            <Link to="/orders">
              {" "}
              <Button className="form-control review" variant="primary">
                <p className="button-text">Review Order</p>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faArrowRight} />
                </p>
              </Button>
            </Link>
          </Cart>
        )}
      </div>
    </div>
  );
};

export default Shop;
