import axios from "axios";
import { useEffect, useState } from "react";
import { getProductFromLocalStorage } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState();
  useEffect(() => {
    const storedCart = getProductFromLocalStorage();
    const savedCart = [];
    // console.log(storedCart);
    const keys = Object.keys(storedCart);
    // console.log(keys);
    axios
      .post("http://localhost:5050/productByKeys", {
        keys,
      })
      .then((products) => {
        console.log(products.data);
        for (const id in storedCart) {
          const addedProduct = products.data?.find(
            (product) => product._id === id
          );
          // console.log(addedProduct);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, []);
  return [cart, setCart];
};

export default useCart;
