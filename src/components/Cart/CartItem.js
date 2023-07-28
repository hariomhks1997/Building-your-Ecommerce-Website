import React,{useContext} from 'react';
import CartContext from '../../Store/Cart-context';
import CartItemShown from './CartItemShown';
import Model from '../UI/Model';

const CartItem = (props) => {
    const cartctx = useContext(CartContext)
    
    const cartitems=cartctx.items.map((item)=>(
      
        <CartItemShown key={item.id} title={item.title} price={item.price} image={item.image} quantity={item.quantity} remove={item.id} ></CartItemShown>
          
    ))
    const totalamount= cartctx.totalamount.toFixed(2);
  return (
    <Model onClick={props.hide} style={{position:'Fixed'}}>
      <div style={{display:'flex',maxHeight:'4rem'}}>
      <button onClick={props.hide} >Close</button>
      <h4 style={{marginLeft:'15rem'}}>Total Amount:{totalamount}</h4>
      <button style={{marginLeft:'5rem',maxheight:'0.5rem'}}>Add Purchase</button>
      
      
      </div>
      <hr></hr>
      <div style={{display:'flex'}}>
      <h2 style={{marginLeft:'1rem'}}>Title</h2>
      <h2 style={{marginLeft:'16rem'}}>Quantity</h2>
      <h2 style={{marginLeft:'6rem'}}>Price</h2>
      </div>
        <div style={{listStyle:'none',margin:'0',padding:'0',maxHeight:'20rem',overflow:'scroll'}}>
    {cartitems}
    
    </div>
    
    </Model>
  )
}

export default CartItem