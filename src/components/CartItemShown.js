import React from 'react';

const CartItemShown = (props) => {
  return (
    <>
    <hr></hr>
    <div style={{display:'flex'}} >
    
      
    <li style={{marginTop:'1.5rem',marginLeft:'1rem'}}>{props.title}</li>
  
    <img src={props.image} alt='hd' style={{marginTop:'0.5rem',maxHeight:'5rem',width:'10rem',marginLeft:'3rem'}}/>

    <div style={{marginTop:'1.5rem',marginLeft:'5rem'}}>Quantity</div>
    
    <li style={{marginTop:'1.5rem',marginLeft:'7rem'}}>Rs:{props.price} </li>
    
    
    
    
    </div>
    <hr></hr>
    </>
  )
}

export default CartItemShown