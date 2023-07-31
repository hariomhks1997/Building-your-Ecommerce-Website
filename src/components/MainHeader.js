import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <div className={classes.control}>
        <header>
            <nav>
                <ul>
                <li><NavLink to='/welcome'>WELCOME</NavLink></li>
                <li><NavLink to='/form'>Form</NavLink></li>
                <li><NavLink to='/product'>Product</NavLink></li>
               
                </ul>
            </nav>
        </header>
        
        
    </div>
  )
}

export default MainHeader;