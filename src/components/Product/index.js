import React from 'react'
import './styles.css'

const Product = ({product, compare}) =>
    <div key={product.Artikelnummer} >
        <div className={"product " + (product.compare ? "compare" : "")}>            
            <div className="stats">
                <div className="stats-container">
                   <span className="product_name"> <input type="checkbox"  onClick={() => compare(product)}/> 
                   {product.name}</span>
                </div>
            </div>
        </div>
    </div>;
export default Product
