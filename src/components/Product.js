import React, {useState} from 'react';
import "./Product.css"

const Product = (props) => {
    const [enteredid, setenteredid] = useState("");
    const [enteredname, setenteredname] = useState("");

    const [enteredprice, setenteredprice] = useState("")
    const [itemwise, setitemwise] = useState("electronic")
    const [ISVALID, setISVALID] = useState(true)
    const productidhandler=(event)=>{
       setenteredid(event.target.value)
       setISVALID(true)

    }
    const productnamehandler=(event)=>{
        setenteredname(event.target.value)
        setISVALID(true)

    }
    const productpricehandler=(event)=>{
        setenteredprice(event.target.value)
        setISVALID(true)

    }
    const itemwisehandler=(event)=>{
        setitemwise(event.target.value)
        setISVALID(true)
    
    }
    
    const submithandler=(event)=>{
     event.preventDefault();
     
  
     if(enteredid.trim().length>0 && enteredname.trim().length>0 && enteredprice.trim().length>0){
      const obj={
        enteredid:enteredid,
        enteredname:enteredname,
        enteredprice:enteredprice,
        itemwise:itemwise,
        key:Math.random().toString().slice(2,16)
       }
       localStorage.setItem(obj.key,JSON.stringify(obj))
       
       
     
      setISVALID(true)

      props.submit(obj.enteredid,obj.enteredname,obj.enteredprice,obj.itemwise,obj.key)
     console.log(enteredid,enteredname,enteredprice,itemwise)
     
     
    //  setenteredid("");
    //  setenteredname("");
    //  setenteredprice("");
    
     }
     else{
      setISVALID(false)
     }
    

    }
  return (
    <div>
        <form className="goals-form" onSubmit={submithandler}>
        <label style={{color:!ISVALID?"red":"black"}}>Unique Order Id</label><br></br>
        <input style={{background:!ISVALID?"red":"white"}} type="number" value={enteredid} onChange={productidhandler} ></input><br></br>
        <label style={{color:!ISVALID?"red":"black"}} >Choose Dish</label><br></br>
        <input style={{background:!ISVALID?"red":"white"}}  type="text" value={enteredname} onChange={productnamehandler}></input><br></br>
        <label style={{color:!ISVALID?"red":"black"}} >Choose Price</label><br></br>
        <input style={{background:!ISVALID?"red":"white"}} type="number" value={enteredprice} onChange={productpricehandler}></input><br></br>
        <select onChange={itemwisehandler}>Choose A Table
          <option value="electronic">Table1</option>
          <option value="food">Table2</option>
          <option value="skin">Table3</option>
        </select><br></br>
        <button type="submit">Add Bill</button>
        </form>
        
        

        </div>
  )
}

export default Product