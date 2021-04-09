
A product comparison page built in React, Redux, Bootstrap and SASS with the following features:
● Show and hide products
● Highlight differences between product features
● Features ordered alphabetically by feature name
● Badges should be placed before features

The following keys which are fetched from the API are not product features to compare, so excluded from the feature list:
salePrice, manufacturerName, grossPrice, BUP_UOM, BUP_Value, uom, productImage, BUP_Conversion, minQuantity, manufacturerImage, name, sku, listPrice, channel, display, atp

Additional features -

● Using Webpack
● Sass/Less or Styled components
● Responsiveness
● Browser backward compatibility (IE11)

The app is built with three main components - 
● ProductList: Show the list of products from which products can be selected for comparison
● Product: Single product component showing the product name and a checkbox for selection
● Compare: Component to list the product features to be compared with each other

Filtering of product list for comparison is done in productReducer.