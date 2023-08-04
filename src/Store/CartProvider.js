import React,{useReducer,useState,} from 'react';
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
      (item)=>item.title===action.item.title
    );
    const existingcartitem=state.items[existingcartitemindex];
    console.log(existingcartitem)
    
    let updateditems;
    if(existingcartitem){
      const updateditem={
        ...existingcartitem,
        quantity:existingcartitem.quantity+1
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
    if (existingitem.quantity===1){
    updateditems=state.items.filter(item=>item.id!==action.id);
    }
    else{
     const updateditem={...existingitem,quantity:existingitem.quantity-1};
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
const calculateremainingtime=(expirationtime)=>{
  const currenttime=new Date().getTime();
  const adjustExpirationtime=new Date(expirationtime).getTime();
  const remainingduration=adjustExpirationtime-currenttime;
  return remainingduration;
}
const CartProvider = (props) => {
  const [cartstate, dispatchcartaction] = useReducer(cartReducer, defaultcartState)
  const initialtoken=localStorage.getItem('token');
 
 
  const [token,settoken]=useState(initialtoken);
  
  
  const userIsLoggedIn=!!token;
  

  
  const logouthandler=()=>{
    
    
    settoken(null)
    localStorage.removeItem('token');
    localStorage.removeItem('token');
   
    
    
    
  }
  const loginhandler=(token,emailtoken,expirationtime)=>{
   
      settoken(token);
      localStorage.setItem('token',token);
      localStorage.setItem('emailtoken',emailtoken);
      
      const remainingtime=calculateremainingtime(expirationtime);
    setTimeout(() => {
      logouthandler();
    }, remainingtime);
      
  }
  
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
        message:"Click Here",
        
        isLoggedIn:userIsLoggedIn,
        login:loginhandler,
        logout:logouthandler,
       

    };
  return (
    <CartContext.Provider value={cartContext }>
     {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;