import React,{useState} from 'react'
import './App.css';
import Product from './components/Product';
import ProductInput from './components/ProductInput';
import ProductWorth from './components/ProductWorth';

const App = () => {
  const [productinput, setproductinput] = useState([])
  

  const submithandler=(id,name,price,item,key)=>{
  setproductinput((prev)=>{
    return [...prev,{id:id,name:name,price:price,item:item,key:key,count:1}]
     
    
  })
  
  }
  const deletehandler=(d)=>{
    setproductinput((prev)=>{
      const updatedelete=prev.filter(delet =>delet.key!==d);
      return updatedelete;
    })

  }
  


  return (
    <div style={{textAlign:'center'}}>
      <Product submit={submithandler}></Product>
      <ProductWorth addprice={productinput} ></ProductWorth>
      <ProductInput style={{marginRight:"auto",marginLeft:"auto"}} onsubmit={productinput} delete={deletehandler}></ProductInput>
      
    </div>
  );
};

export default App;
