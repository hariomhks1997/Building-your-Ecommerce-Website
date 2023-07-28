import React,{useContext} from 'react';
import classes from './Navbar.module.css'
import Cart from './Cart/Cart';
import CartContext from '../Store/Cart-context';


const Navbar = (props) => {
  const cartctx = useContext(CartContext);
  let quantity=0;
  cartctx.items.map((item)=>(
     quantity=quantity+item.quantity
  ))
  return (
    <div className={classes.nav}>
        <li className={classes.li1}><a href='/' >Home</a></li>
        <li className={classes.li2}><a href='/Store'>Store</a></li>
        <li className={classes.li3}><a href='/About'>About</a></li>
        <h4 style={{marginLeft:'50rem'}}>{quantity}</h4>
        <Cart  shown={props.shown}></Cart>
        
    </div>
  )
}

export default Navbar