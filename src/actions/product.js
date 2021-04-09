import * as types from '../constants/types'

const PRODUCT_URL = 'http://5c35e7f96fc11c0014d32fcd.mockapi.io/compare/products'

export const getProducts = () =>
  dispatch =>
    fetch(`${PRODUCT_URL}`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: types.FETCH_PRODUCTS,
          payload: response.products
        })
      })

export const compare = product => ({
    type: types.COMPARE_PRODUCT,
    product
  })
