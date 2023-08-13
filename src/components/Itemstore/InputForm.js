import React, { useContext, useState } from "react";
import CartContext from "../../Store/Cart-context";


const InputForm = (props) => {
  const cartctx = useContext(CartContext);
  const [item, setitem] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState(0);
  const itemhandler = (event) => {
    setitem(event.target.value);
    console.log(event.target.value)
    if(event.target.value==='Paracetomol' && description==='600mg')
    setprice(300);
  else if(event.target.value==='Azithromycine' && description==='600mg'){
    setprice(200)
  }else if(event.target.value==='Moxiflox'&& description==='600mg'){
  setprice(150)
  }else if(event.target.value==='Paracetomol' && description==='500mg'){
    setprice(250)
  }else if(event.target.value==='Azithromycine' && description==='500mg'){
    setprice(150)
  }else if(event.target.value==='Moxiflox' && description==='500mg'){
    setprice(100)
  }
  else{
    setprice(0)
  }
  };
  const descriptionhandler = (event) => {
    setdescription(event.target.value);
    if(event.target.value==='600mg' && item==='Paracetomol')
    setprice(300);
  else if(event.target.value==='600mg' && item==='Azithromycine'){
    setprice(200)
  }else if(event.target.value==='600mg'&& item==='Moxiflox'){
  setprice(150)
  }else if(event.target.value==='500mg' && item==='Paracetomol'){
    setprice(250)
  }else if(event.target.value==='500mg' && item==='Azithromycine'){
    setprice(1500)
  }else if(event.target.value==='500mg' && item==='Moxiflox'){
    setprice(100)
  }
  else{
    setprice(0)
  }
    
  };
  const pricehandlere = (event) => {
    setprice(event.target.value)
  };

  const submithandler = (event) => {
    event.preventDefault();
    let id=Math.random().toString();
    let title=item;
    let description1=description;
    let quantity=+0;
    

    let rate=price;
    let price1=+0
     const add={
      id,
       title,
       description1,
       rate,
       quantity,
       price1,
       
     }
     console.log(add)
     cartctx.additem(add)
    
  };
  
  console.log(cartctx)
  

  return (
    <div>
      <form onSubmit={submithandler}>
        <div
          style={{
            display: "flex",
            background: "red",
            marginTop: "5rem",
            width: "100%",
            maxWidth:'100%'
          }}
        >
          <div style={{ marginLeft: "5rem", marginTop: "1rem" }}>
            <label style={{ marginRight: "1rem" }}>Medicine Name</label>
            <br></br>
            <select onChange={itemhandler}>
            <option value={item}>{item}</option>
              <option value='Paracetomol'>Paracetomol</option>
              <option value='Azithromycine'>Azithromycine</option>
              <option value='Moxiflox'>Moxiflox</option>
            </select>
          </div>
          <div style={{ marginLeft: "5rem", marginTop: "1rem" }}>
            <label style={{ marginRight: "2.5rem" }}>Description</label>
            <br></br>
            <select onChange={descriptionhandler} >
            <option value={description}>{description}</option>
              <option value='500mg'>500mg</option>
              <option value='600mg'>600mg</option>
            </select>
          </div>
          <div style={{ marginLeft: "5rem", marginTop: "1rem" }}>
            <label style={{ marginRight: "0.5rem" }}>Price</label>
            <br></br>
            <select onChange={pricehandlere}  >
              <option value={price}>{price}</option>
              
            </select>
          </div>
          <button
            style={{ marginLeft: "5rem", height: "2rem", marginTop: "2rem" }}
          >
            Add Product
          </button>
        </div>
      </form>
     
    </div>

    // <div className='column' row='2' >

    // <div className={classes['cart-items']}  >
    //     <form className={classes.total}style={{display:'flex',marginLeft:'1rem',marginTop:'5rem'}} onSubmit={submithandler}>
    //     <h2>{props.title}</h2><br></br>
    //     <img src={props.image} alt='hd'/>
    //     <div style={{display:'flex'}}>
    //     <h6 style={{marginRight:'10rem'}}>RS : {props.price}</h6>
    //     <button type='submit'>Add</button>
    //     </div>
    //     </form>
    //     <hr></hr>
    // </div>
    // </div>
    // <div className={classes.section}>

    //   <div className={classes.musiccontent}>
    //     <div className={classes.album}>
    //       <h3>{props.title}</h3>
    //       <div className={classes.img1}>
    //       <img className={classes.img} src={props.image} alt='hd'/>
    //       </div>
    //       <div className={classes.proddetails}>
    //       <span>{props.price}</span>
    //       <button onClick={submithandler} type='submit'>Add To Cart</button>
    //       </div>

    //     </div>
    //   </div>

    // </div>
  );
};

export default InputForm;
