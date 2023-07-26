import React from 'react';
import classes from './Navbar.module.css'
import Cart from './Cart';


const Navbar = (props) => {
  return (
    <div className={classes.nav}>
        <li className={classes.li1}><a href='/'>Home</a></li>
        <li className={classes.li2}><a href='/'>Store</a></li>
        <li className={classes.li3}><a href='/'>About</a></li>
        <Cart  shown={props.shown}></Cart>
    </div>
  )
}

export default Navbar