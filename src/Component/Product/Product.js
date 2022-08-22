import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { handleAddProduct, product } = props;
  const { img, name, seller, price, ratings } = product;
  return (
    <div className="product">
      <Card className="product-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: ${price}</Card.Text>
          <br />
          <Card.Text>Manufacturer: {seller}</Card.Text>
          <Card.Text>Ratings: {ratings}</Card.Text>
          <Button
            onClick={() => handleAddProduct(product)}
            className="form-control btn d-flex justify-content-center align-items-center mt-2"
            variant="primary"
          >
            <p className="button-text"> Add To Cart</p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faCartArrowDown} />
            </p>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
