import React,{useContext,} from 'react';
import classes from './InputForm.module.css';
import CartContext from '../../Store/Cart-context';
import axios from 'axios';



const InputForm = (props) => {
  const cartctx = useContext(CartContext);
  
 
  
 
 
  
  const submithandler= async (event)=>{
    event.preventDefault();
    
      let id=Math.random().toString();
      let title=props.title;
      let image=props.image;
      let price=props.price;
      let quantity=+1;

   
    const add={
      id,
      title,
      image,
      price,
      quantity
    }
    let email=window.localStorage.getItem('emailtoken')
    console.log(email)
    
    try {
      const post = await axios.post(`https://crudcrud.com/api/99cbe24f914e433fa63236049ace8da4/${email}`,add)
      console.log(post)
      
      cartctx.additem(post.data)
      
    

  } catch (err) {
      console.log(err)
  }
   // cartctx.additem(sumary)
   
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