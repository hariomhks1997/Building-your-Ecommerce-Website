import React, { memo,useContext } from "react";
import InputForm from "./InputForm";
import Card from "../UI/Card";
import InputCart1 from "./InputCart1";
import CartContext from "../../Store/Cart-context";

const InputItems = () => {
  const cartctx = useContext(CartContext)
  console.log(cartctx)
  const product=cartctx.items.map((item)=>(
    <InputCart1 item={item.title} price={item.rate} description={item.description1}></InputCart1>
  ))
 
  
  return <Card>
    <InputForm></InputForm>
    <div style={{background:'pink',height:'30rem',marginTop:'5rem',maxHeight:'20rem',overflow:'scroll',width:'100%'}}>
    {product}
    </div>
    
    </Card>;
};

export default memo(InputItems);
