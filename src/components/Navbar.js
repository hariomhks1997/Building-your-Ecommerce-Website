import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import Cart from "./Cart/Cart";
import CartContext from "../Store/Cart-context";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const cartctx = useContext(CartContext);
  const navigate = useNavigate();

  let id;
  const logouthandler = () => {
    id = cartctx;
    id.logout();
    navigate("/");
  };
  return (
    <div className={classes.nav}>
      <li className={classes.li1}>
        <a href="/">Home</a>
      </li>

      <li className={classes.li3}>
        <a href="/About">About</a>
      </li>
      {cartctx.isLoggedIn && (
        <li className={classes.li2}>
          <a href="/Store">Store</a>
        </li>
      )}
      {!cartctx.isLoggedIn && (
        <li className={classes.li1}>
          <a href="/login">Login</a>
        </li>
      )}
      {cartctx.isLoggedIn && (
        <li>
          <button
            style={{
              background: "red",
              padding: "0.5rem",
              borderRadius: "1.5rem",
              fontSize: "15px",
            }}
            onClick={logouthandler}
          >
            Logout
          </button>
        </li>
      )}

      {cartctx.isLoggedIn && <Cart shown={props.shown}></Cart>}
    </div>
  );
};

export default Navbar;
