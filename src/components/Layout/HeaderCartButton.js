import React,{useContext,useEffect,useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/Cart-context';


const HeaderCartButton = (props) => {
  const [btnisheighlketed, setbtnisheighlketed] = useState(false)
  
  const cartCtx=useContext(CartContext);
  // const numberofcartitems=cartCtx.items.reduce((curnumber,item)=>{
  // return curnumber+item.amount;
  // },0);
  let numberofcartitems=0
  cartCtx.items.map((item)=>(
    
     numberofcartitems=numberofcartitems+item.quantity
  ))
  const btnClasses=`${classes.button} ${btnisheighlketed ? classes.bump:''}`;
  const {items}=cartCtx;
  useEffect(() => {
    if(items.length===0){
      return;
    }
    setbtnisheighlketed(true)
    const timer=setTimeout(()=>{
      setbtnisheighlketed(false)
    },300)
  
    return ()=>{
      clearTimeout(timer)
    }
    
  }, [items]);
  
  return (
    <button className={btnClasses} onClick={props.shown} >
  <span className={classes.icon}>
    <CartIcon></CartIcon>
  </span>
  <span>Your Cart</span>
  <span className={classes.badge}>
  {numberofcartitems}
  </span>
  

    </button>
  )
}

export default HeaderCartButton