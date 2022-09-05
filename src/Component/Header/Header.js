import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("sign out success");
    });
  };
  console.log(user);
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="logo" />
        <div>
          <Link to="/shop">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About</Link>
          {user ? (
            <button onClick={handleSignOut} className="mx-4 rounded">
              Sign Out
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
          {/* {user && <p className="text-white">{user.email}</p>} */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
