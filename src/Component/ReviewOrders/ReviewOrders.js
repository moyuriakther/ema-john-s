import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewOrders = ({ product, handleRemoveItem }) => {
  const { name, price, shipping, img } = product;

  return (
    <div className="d-flex justify-content-between align-items-center border rounded px-2">
      <div className="d-flex justify-content-start align-items-center ">
        <div>
          <img style={{ height: "90px" }} src={img} alt="product" />
        </div>
        <div className="m-2">
          <h4>{name}</h4>
          <p>Price: ${price}</p>
          <p>Shipping Charge: ${shipping}</p>
        </div>
      </div>
      <div className="m-4">
        <FontAwesomeIcon
          onClick={() => handleRemoveItem(product)}
          icon={faTrashCan}
          size="lg"
          className="trash"
        />
      </div>
    </div>
  );
};

export default ReviewOrders;
