import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <div id="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/account">Account</Link>
        <Link to="/Login">Log in</Link>
        <Link to="/register">Register</Link>
      </div>
    </>
  );
}
