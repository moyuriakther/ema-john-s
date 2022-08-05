import React from "react";
import "./Cart.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h4 className="my-3 text-center">Order Summary</h4>
      <p>Selected Items:{cart.length}</p>
      <p>Total Price:{cart.length}</p>
      <p>Total Shipping Charge:{cart.length}</p>
      <p>Tax:{cart.length}</p>
      <strong>
        <p>Grand Total:{cart.length}</p>
      </strong>
      <Button className="form-control clear-cart my-3" variant="primary">
        <p className="button-text">Clear Cart</p>
        <p>
          <FontAwesomeIcon icon={faTrashCan} />
        </p>
      </Button>
      <Button className="form-control review" variant="primary">
        <p className="button-text">Review Order</p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faArrowRight} />
        </p>
      </Button>
    </div>
  );
};

export default Cart;
