import React from 'react'
import {Product} from '../'

const ProductList = ({products, compare}) =>
  <div className="row mt-3">
      {products.map(product =>
        <Product key={product.Artikelnummer} product={product} compare={compare} />
      )}
  </div>;

export default ProductList
