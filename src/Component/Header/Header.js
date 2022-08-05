import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="logo" />
        <div>
          <a href="order">Order</a>
          <a href="review">Order Review</a>
          <a href="inventory">Manage Inventory</a>
          <a href="login">Login</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
