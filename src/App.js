import React, { useState} from "react";
import Navbar from "./components/Navbar";
import InputItems from "./components/Itemstore/InputItems";
import CartItem from "./components/Cart/CartItem";
import CartProvider from "./Store/CartProvider";
import {BrowserRouter as Main,Route,Routes} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import LoginForm from "./components/Itemstore/LoginForm";


function App() {
  
  const [shown, setshown] = useState(false);
  const shownhandler = () => {
    setshown(true);
  };
  const hidehandler = () => {
    setshown(false);
  };

  return (
   
    <CartProvider>
     
      
      
      
      <Main>
      <Navbar shown={shownhandler}></Navbar>
      <hr></hr>
      {shown && <CartItem hide={hidehandler}></CartItem>}
      <Routes>
      <Route exact path='/login' element={<LoginForm></LoginForm>} ></Route>
      <Route exact path='/Store' element={<InputItems></InputItems>}></Route>
     <Route exact path='/' element={<Home></Home>} ></Route>
     <Route exact path='/About' element={<About></About>} ></Route>
      
      </Routes>
      </Main>
      
    </CartProvider>
    
  );
}

export default App;
