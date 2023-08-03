import React,{useContext} from 'react';
import classes from './Cart.module.css';
import CartContext from '../../Store/Cart-context';

const Cart = (props) => {
  const cartctx = useContext(CartContext);
  let quantity=0;
  cartctx.items.map((item)=>(
     quantity=quantity+item.quantity
  ))
  
  return (
    <div style={{display:'flex'}}>
        
        <button className={classes.button} onClick={props.shown}>Cart</button>
        {cartctx.isLoggedIn && <h4 >{quantity}</h4>}
        
    </div>
  )
}

export default Cart;