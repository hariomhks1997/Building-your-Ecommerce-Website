import React,{useContext} from "react";
import classes from "./Cart.module.css";
import Model from "../UI/Model";
import CartContext from "../../Store/Cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartctx = useContext(CartContext);
    const hasitems=cartctx.items.length>0;
    const cartitemremovehandler=(id)=>{
      cartctx.removeitem(id)
    }
    const cartitemaddhandler=(item)=>{
     
        cartctx.additem(item);
     
     
    }

    
  
    const totalamount=`$${cartctx.totalamount.toFixed(2)}`;
    console.log(totalamount)
    const cartitems=(
        <ul className={classes['cart-items']}>
            {cartctx.items.map((item)=>(
                <CartItem key={item.id} name={item.name} description={item.description} price={item.price} quantity={item.quantity} onRemove={cartitemremovehandler.bind(null,item.id)} onAdd={cartitemaddhandler.bind(null,item)}> </CartItem>
            ))}

        </ul>
    )
   
    
  return (
  <Model onClick={props.hide}>
{cartitems}
<div className={classes.total}>
    <span>Total Amount</span>
    <span>{totalamount}</span>
</div>
<div className={classes.actions}>
    <button onClick={props.hide} className={classes['button--alt']}>Close</button>
    {hasitems && <button className={classes.button}>Order</button>}
</div>
</Model>
  );
};

export default Cart;
