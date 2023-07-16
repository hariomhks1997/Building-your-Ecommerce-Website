import React from 'react'

const ProductWorth = (props) => {
  console.log(props)

  let num=0;
  let count=parseFloat(num);
  let number=0;
  let rsprice=parseFloat(number)
  props.addprice.map((rs)=>(
        
    rsprice=rsprice+parseFloat(rs.price)
    
  ))
  props.addprice.map((rs)=>(
        
    count=count+parseFloat(rs.count)
    
  ))
  
    
  return (
    <div>
      
      <h2 style={{textAlign:"center"}}>Total Order Price :- <span>{rsprice} Rs & Total List Count={count}</span></h2>
        
        
        
    </div>
  )

}

export default ProductWorth;