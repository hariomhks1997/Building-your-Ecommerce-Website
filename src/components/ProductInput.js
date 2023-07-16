import React from 'react'
import Electronic from './Electronic'
import FoodItem from './FoodItem'
import SkinCare from './SkinCare'

const ProductInput = (props) => {
  
  return (
    <>
    <h1>Order</h1>
    <div style={{display:"flex"}}>
   <h2 style={{marginRight:"auto",marginLeft:"auto"}}>Table 1
   {props.onsubmit.map((user)=>(
  
  <Electronic id={user.id} name={user.name} price={user.price} delete={props.delete} key ={user.key} a={user.key} item={user.item} ></Electronic>
   
   ))}
   </h2>
   <h2 style={{marginRight:"auto",marginLeft:"auto"}}>Table 2
   {props.onsubmit.map((user)=>(

<FoodItem id={user.id} name={user.name} price={user.price} delete={props.delete} key={user.key} a={user.key} item={user.item} ></FoodItem>
 
 ))}
 </h2>
 <h2 style={{marginRight:"auto",marginLeft:"auto"}}>Table 3
 {props.onsubmit.map((user)=>(

<SkinCare id={user.id} name={user.name} price={user.price} delete={props.delete} key={user.key} a={user.key} item={user.item} ></SkinCare>
 
 ))}
 </h2>
 
 
 



    </div>
    </>
  
  )
}

export default ProductInput