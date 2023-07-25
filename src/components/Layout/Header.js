import React ,{Fragment}from 'react';
import classes from './Header.module.css';
import mealsimage from '../../assets/download.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Medicine Item</h1>
            
            <HeaderCartButton shown={props.shown} hide={props.hide}></HeaderCartButton>
        </header>

        <div className={classes['main-image']}>
        
          
            <img src={mealsimage} alt="A table full of delecious food"></img>
        </div>
    </Fragment>
    
  )
}

export default Header