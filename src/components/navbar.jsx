import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/" id = "dog"><b> SwiftServe </b></Link>
        <div className = "searchbar">
          <input type="text" placeholder=""></input>
        </div>      
        <Link to="/shop"> Services </Link>
        <Link to="/appointments"> Appointments </Link>
        <Link to="/login"> Login </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
