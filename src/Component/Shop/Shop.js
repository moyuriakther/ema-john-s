import React from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { addToDb } from "../../utilities/fakedb";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products] = useProducts();
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useCart(products);
  // useEffect(() => {
  //   const localProducts = getProductFromLocalStorage();
  //   let savedCart = [];
  //   for (const id in localProducts) {
  //     const existProducts = products?.find((product) => product.id === id);
  //     if (existProducts) {
  //       const quantity = localProducts[id];
  //       existProducts.quantity = quantity;
  //       savedCart.push(existProducts);
  //     }
  //   }
  //   setCart(savedCart);
  // }, [products]);
  const handleAddProduct = (product) => {
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      const newCart = [...cart, product];
      setCart(newCart);
      addToDb(product.id);
      console.log(cart, newCart);
    } else {
      alert("already added");
      console.log(cart);
    }
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products?.map((product) => (
          <Product
            handleAddProduct={handleAddProduct}
            product={product}
            key={product?.id}
          />
        ))}
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
