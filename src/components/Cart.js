import React from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {
  
  return (
    <div >
        
        <button className={classes.button} onClick={props.shown}>Cart</button>
        
    </div>
  )
}

export default Cart