import React,{useState} from "react";
import Navbar from "./components/Navbar";
import InputItems from "./components/InputItems";
import CartProvider from "./Store/CartProvider";
import CartItem from "./components/CartItem";



function App() {
  const [shown, setshown] = useState(false);
  const shownhandler=()=>{
    setshown(true)
  }
  const hidehandler=()=>{
    setshown(false)
  }
 
  return (
    <CartProvider>
<Navbar shown={shownhandler}></Navbar>
<hr></hr>
{shown && <CartItem hide={hidehandler}></CartItem>}
<InputItems></InputItems>
    </CartProvider>

  )
}

export default App;
