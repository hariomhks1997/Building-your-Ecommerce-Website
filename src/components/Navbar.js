import React from 'react';
import classes from './Navbar.module.css'


const Navbar = () => {
  return (
    <div className={classes.nav}>
        <li className={classes.li1}><a style={{listStyle:'none'}}href='/'>Home</a></li>
        <li className={classes.li2}><a href='/'>Store</a></li>
        <li className={classes.li3}><a href='/'>About</a></li>
        <button className={classes.button}>Cart</button>
    </div>
  )
}

export default Navbar