import React from 'react'
import './styles.css'

const CompareImage = ({products}) =>
<div className="row compare">
<div className="col-12 mt-3 text-center">
  <table className="table">
    <thead className="thead-default">
      <tr>
        
        {products.map(product =>
          <th key={product.Artikelnummer}>
            <img className="compareImage" src="../images/eriks_o-ring_black.jpg" alt={product.name} />
          </th>
        )}
      </tr>
      <tr>
       
        {products.map(product =>
          <th key={product.Artikelnummer}>
            {product.name}
          </th>
        )}
      </tr>
      <tr>
        {products.map(product =>
          <th key={product.Artikelnummer} className="product_price">
            {product.grossPrice}
          </th>
        )}
      </tr>
    </thead>
   </table>
</div>
</div>;


const Compare = ({products}) =>
  <div className="row compare">
    <div className="col-12 mt-5">
      <table className="table">
       <tbody>
         <tr>
         <th className="col-sm-3 col-md-3">Badges</th>
            {products.map(product => 
              <td className="col-sm-9 col-md-9" key={product.Artikelnummer}>
               { (product.badges.split("|")).map(productBadge => <img key={productBadge._id} src= {productBadge}/>)}
              </td>
            )}
          </tr>
          <tr>
            <th className="col-sm-3 col-md-3">Materiaal</th>
            {products.map(product =>
              <td className="col-sm-9 col-md-9" key={product.Artikelnummer}>{product.Materiaal}</td>
            )}
          </tr>
          <tr>
            <th className="col-sm-3 col-md-3">Hardheid</th>
            {products.map(product =>
              <td key={product.Artikelnummer}>{product.Hardheid}</td>
            )}
          </tr>
          <tr>
            <th scope="text-center">Inwendige diameter</th>
            {products.map(product =>
              <td key={product.Artikelnummer} className="text-center">{product['Inwendige diameter']}</td>
            )}
          </tr>
          <tr>
            <th scope="text-center">Snoerdikte</th>
            {products.map(product =>
              <td key={product.Artikelnummer} className="text-center">{product.Snoerdikte}</td>
            )}
          </tr>
          <tr>
            <th scope="text-center">StepQuantity</th>
            {products.map(product =>
              <td key={product.Artikelnummer} className="text-center">{product.stepQuantity}</td>
            )}
          </tr>
          <tr>
            <th scope="text-center">Kleur</th>
            {products.map(product =>
              <td key={product.Artikelnummer} className="text-center">{product.Kleur}</td>
            )}
          </tr>
          <tr>
            <th scope="text-center">Temperatuurgebied</th>
            {products.map(product =>
              <td key={product.Artikelnummer} className="text-center">{product.Temperatuurgebied}</td>
            )}
          </tr>
          <tr>
            <th scope="text-center">Maat volgens AS568</th>
            {products.map(product =>
              <td key={product.Artikelnummer} className="text-center">{product['Maat volgens AS568']}</td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  </div>;

export { Compare, CompareImage,}
