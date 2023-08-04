import React, { useState,useContext,useEffect} from "react";
import Navbar from "./components/Navbar";
import InputItems from "./components/Itemstore/InputItems";
import CartItem from "./components/Cart/CartItem";

import {BrowserRouter as Main,Route,Routes} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import LoginForm from "./components/Itemstore/LoginForm";
import CartContext from "./Store/Cart-context";
import axios from "axios";



function App() {
const cartctx = useContext(CartContext)
useEffect(() => {
 const email=localStorage.getItem('emailtoken')
 showuser(email)
 console.log(email)
}, [])
function showuser(email){
  axios.get(`https://crudcrud.com/api/99cbe24f914e433fa63236049ace8da4/${email}`)
            .then((response)=>{
                console.log(response)
                for(var i=0;i<response.data.length;i++)
            {
                //showuseronscreen(response.data[i])
                cartctx.additem(response.data[i]); 
            }
            })

}
  
  
  const [shown, setshown] = useState(false);
  const shownhandler = () => {
    setshown(true);
  };
  const hidehandler = () => {
    setshown(false);
  };

  return (
   
    
     
      
      
      
      <Main>
      <Navbar shown={shownhandler}></Navbar>
      <hr></hr>
     { shown && <CartItem hide={hidehandler}></CartItem>}
      <Routes>
    <Route exact path='/login' element={<LoginForm></LoginForm>} ></Route>
      <Route exact path='/Store' element={cartctx.isLoggedIn ?<InputItems></InputItems>:<Home></Home>}></Route>
     <Route exact path='/' element={<Home></Home>} ></Route>
     <Route exact path='/About' element={<About></About>} ></Route>
      
      </Routes>
      </Main>
      
    
    
  );
}

export default App;
