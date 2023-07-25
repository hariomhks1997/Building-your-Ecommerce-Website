import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>Medicine Name : {props.name}</h2>
        <h2>Medicine Description : {props.description}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>Medicine Price : {price}</span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;