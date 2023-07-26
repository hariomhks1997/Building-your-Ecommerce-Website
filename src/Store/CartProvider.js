import React,{useReducer} from 'react';
import CartContext from './Cart-context';

const defaultcartState={
  items:[],
  totalamount:0
}
const cartReducer=(state,action)=>{
  if(action.type==='AddItem'){
    //const upadteItems=state.items.concat(action.item);
    const updatetotalamount=state.totalamount+action.item.price ;
    const existingcartitemindex=state.items.findIndex(
      (item)=>item.id===action.item.id
    );
    const existingcartitem=state.items[existingcartitemindex];
    
    let updateditems;
    if(existingcartitem){
      const updateditem={
        ...existingcartitem,
        amount:existingcartitem.amount+1
      }
      updateditems=[...state.items];
      updateditems[existingcartitemindex]=updateditem;
    }
    else{
      updateditems=state.items.concat(action.item);
    }
    
  
     
    return {
      items:updateditems,
      totalamount:updatetotalamount
    }
    
  }
  if(action.type==='remove'){

    const existingcartitemindex=state.items.findIndex(
      (item)=>item.id===action.id
    ); 
    const existingitem=state.items[existingcartitemindex];
    const updatetotalamount=state.totalamount-existingitem.price;
    let updateditems;
    if (existingitem.amount===1){
    updateditems=state.items.filter(item=>item.id!==action.id);
    }
    else{
     const updateditem={...existingitem,amount:existingitem.amount-1};
     updateditems=[...state.items];
     updateditems[existingcartitemindex]=updateditem;
    }
    return {
      items:updateditems,
      totalamount:updatetotalamount
    }
  }
  

 return defaultcartState;
}
const CartProvider = (props) => {
  const [cartstate, dispatchcartaction] = useReducer(cartReducer, defaultcartState)
  
    const additemhandler=(item)=>{
      dispatchcartaction({type:'AddItem',item:item})
      
    }
    const removeitemhandler=(id)=>{
      dispatchcartaction({type:'remove',id:id})

    }
    const cartContext={
        items:cartstate.items,
        totalamount:cartstate.totalamount,
        additem:additemhandler,
        removeitem:removeitemhandler,
        message:"Click Here"
    };
  return (
    <CartContext.Provider value={cartContext }>
     {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;