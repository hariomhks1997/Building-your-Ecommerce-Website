import React,{useState,useContext} from 'react';
import classes from './MealItemForm.module.css';
import CartContext from '../../../Store/Cart-context';
import Card from '../../UI/Card';


const MealItemForm = (props) => {
  const cartctx = useContext(CartContext)
const [name, setname] = useState('');
const [description, setdescription] = useState('');
const [price, setprice] = useState('');
const [quantity, setquantity] = useState(0);
const namehandler=(event)=>{
  setname(event.target.value)

}
const descriptionhandler=(event)=>{
  setdescription(event.target.value)
}
const pricehandler=(event)=>{
  setprice(event.target.value)
}
const quantityhandler=(event)=>{
  
    setquantity(event.target.value)

  
 
}
   
  const submithandler=(event)=>{
    event.preventDefault();
    const sumary={
      id:Math.random().toString(),
      name:name,
      description:description,
      price:+price,
      quantity:+quantity
    }
    
      cartctx.additem(sumary)
    
    
  }
  return (
    <Card>
    <form className={classes.form} onSubmit={submithandler}>
      <label>Medicine Name</label><br></br>
      <input type='text' onChange={namehandler}></input><br></br>
      <label>Medicine Description</label><br></br>
      <input type='text' onChange={descriptionhandler}></input><br></br>
      <label>Medicine Price</label><br></br>
      <input type='text'onChange={pricehandler}></input><br></br>
      <label>Medicine Quantity</label><br></br>
      <input type='number'onChange={quantityhandler}></input><br></br>
      <button type='submit'>Add Medicine</button>
    </form>
    </Card>
  )
}

export default MealItemForm