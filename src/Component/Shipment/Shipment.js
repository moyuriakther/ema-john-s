import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleBlurName = (e) => {
    setName(e.target.value);
  };
  const handleBlurAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleBlurPhone = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmitShipment = (e) => {
    e.preventDefault();
    const shippingInfo = [name, user?.email, address, phone];
    console.log(shippingInfo);
  };
  return (
    <div className="form-container d-flex justify-content-center mx-auto py-5">
      <div>
        <h1 className="form-title">Shipping Information</h1>
        <form onSubmit={handleSubmitShipment}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label> <br />
            <input onBlur={handleBlurName} type="text" name="name" required />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="address">Address</label> <br />
            <input
              onBlur={handleBlurAddress}
              type="text"
              name="address"
              required
            />
          </div>{" "}
          <br />
          <div className="form-group">
            <label htmlFor="phone">Phone</label> <br />
            <input onBlur={handleBlurPhone} type="text" name="phone" required />
          </div>{" "}
          <br />
          <button type="submit form-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Shipment;
