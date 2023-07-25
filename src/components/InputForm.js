import React from 'react';
import classes from './InputForm.module.css'

const InputForm = (props) => {
  return (
    <div className='column'>
    <div className={classes['cart-items']}>
        <form style={{class:'column'}}>
        <h2>{props.title}</h2><br></br>
        <img src={props.image} alt='hd'/>
        <div style={{display:'flex'}}>
        <h6>{props.price}</h6>
        <button>Add</button>
        </div>
        </form>
    </div>
    </div>
  )
}

export default InputForm