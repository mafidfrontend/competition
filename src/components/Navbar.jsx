import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="Logo">
          <Link to='/'>
            <img src="/Logo.svg" alt="Saasto Logo" />
          </Link>
        </div>
        <ul>
          <li>
            <a href="#">Demos</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="navbarBtns">
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
          <button>Sign up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
