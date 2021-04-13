import React, { Fragment } from 'react'
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
            {products.map((product, index) => (
              <td className="col-sm-3 col-md-3" key={index}>
                { (product.badges.split("|")).map((productBadge, badgeIndex) => <img key={badgeIndex} src= {productBadge}/>)}
              </td>
            ))}
          </tr>
          <tr>
          { products.map((product, index) => {
            const {badges, compare, salePrice, manufacturerName, grossPrice, BUP_UOM, BUP_Value, uom, productImage, BUP_Conversion, minQuantity, manufacturerImage, name, sku, listPrice, channel, display, atp, ...filteredProduct} = product;
            const sortedProduct = Object.keys(filteredProduct).sort((a, b) => a.localeCompare(b, 'en', {ignorePunctuation: true}));
            

            return(
            <Fragment>
              {index === 0 && 
                <th className="col-sm-3 col-md-3" key={index}>
                  {sortedProduct.map(featureName => 
                    (<div key={featureName}>{featureName}</div>)
                  )}
                </th>
              }
              <td>
                {sortedProduct.map(featureName => {                  
                  return (<div key={product["name"].featureName}>{filteredProduct[featureName]}</div>)
                })}
              </td>
            </Fragment>)

            })}
          </tr>
        </tbody>
      </table>
    </div>
  </div>;

export { Compare, CompareImage,}
