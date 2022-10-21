import React from "react";
import "./Cart.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { deleteShoppingCart } from "../../utilities/fakedb";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const { cart } = props;
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    if (product.quantity < 1) {
      product.quantity = 1;
    }
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = Math.round(parseFloat((total * 0.1).toFixed(2)));
  const grandTotal = total + shipping + tax;
  const navigate = useNavigate();
  const handleClear = () => {
    deleteShoppingCart();
    navigate("/");
  };
  return (
    <div className="cart">
      <h4 className="my-3 text-center">Order Summary</h4>
      <p>Selected Items:{quantity}</p>
      <p>Total Price:{total}</p>
      <p>Total Shipping Charge:{shipping}</p>
      <p>Tax:{tax}</p>
      <strong>
        <p>Grand Total:{grandTotal}</p>
      </strong>
      <Button
        onClick={handleClear}
        className="form-control clear-cart my-3"
        variant="primary"
      >
        <p className="button-text">Clear Cart</p>
        <p>
          <FontAwesomeIcon icon={faTrashCan} />
        </p>
      </Button>
      {props.children}
    </div>
  );
};

export default Cart;
