import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewOrders from "../ReviewOrders/ReviewOrders";
import "./Orders.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  // const [products] = useProducts();
  const [cart, setCart] = useCart();
  console.log(cart);
  const handleRemoveItem = (product) => {
    console.log(product, cart);
    const newCart = cart.filter((pd) => pd._id !== product._id);
    setCart(newCart);
    removeFromDb(product._id);
  };
  return (
    <div className="container">
      <div className="shop-container">
        <div className="order-container">
          {cart?.map((product) => (
            <ReviewOrders
              product={product}
              handleRemoveItem={handleRemoveItem}
              key={product._id}
            />
          ))}
        </div>
        <div className="cart-container p-3">
          {cart && (
            <Cart cart={cart}>
              <Link to="/shipment">
                {" "}
                <Button className="form-control review" variant="primary">
                  <p className="button-text">Shipment</p>
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
    </div>
  );
};

export default Orders;
