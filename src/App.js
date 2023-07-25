import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import MealItemForm from "./components/Meals/MealItem/MealItemForm";


function App() {
  const [cartisshown, setcartisshown] = useState(false);
  const showcarthandler=()=>{
   setcartisshown(true)
  }
  const hidecarthandler=()=>{
  setcartisshown(false)
  }
  return (

    <CartProvider>
      {cartisshown && <Cart hide={hidecarthandler}></Cart>}
      <Header shown={showcarthandler} ></Header>
      <main>
        <MealItemForm></MealItemForm>
      </main>
    </CartProvider>
  );
}

export default App;
