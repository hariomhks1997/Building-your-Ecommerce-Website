import React,{useContext} from 'react';
import classes from './InputForm.module.css';
import CartContext from '../Store/Cart-context';

const InputForm = (props) => {
  const cartctx = useContext(CartContext);
  const submithandler=(event)=>{
    event.preventDefault();
    const sumary={
      id:Math.random().toString(),
      title:props.title,
      image:props.image,
      price:props.price,
      quantity:+1

    }
    cartctx.additem(sumary)
  }


  return (
    <div className='column'>
    <div className={classes['cart-items']}  >
        <form className={classes.total}style={{display:'flex',marginLeft:'1rem',marginTop:'5rem'}} onSubmit={submithandler}>
        <h2>{props.title}</h2><br></br>
        <img src={props.image} alt='hd'/>
        <div style={{display:'flex'}}>
        <h6 style={{marginRight:'10rem'}}>RS : {props.price}</h6>
        <button type='submit'>Add</button>
        </div>
        </form>
        <hr></hr>
    </div>
    </div>
  )
}

export default InputForm