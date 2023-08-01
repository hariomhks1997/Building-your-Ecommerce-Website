import React from 'react';
import { NavLink ,useParams} from 'react-router-dom';

const ProductDetail = () => {
    const params=useParams();
  return (
    <div>
        <header>
            <nav>
                <ul>
                <li><NavLink to='/productdetail'>ProductDetails</NavLink></li>
                <p>{params.productId}</p>
                
               
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default ProductDetail