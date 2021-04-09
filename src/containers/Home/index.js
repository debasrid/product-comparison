import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {ProductList} from '../../components'
import * as productActions from '../../actions/product'
import {connect} from 'react-redux'
import { Compare, CompareImage } from '../../components/Compare'

class Home extends Component {
  componentWillMount() {
    this.props.actions.getProducts()
  }

  render() {
    const {products, actions} = this.props;
    const compareProducts = products.filter(product => product.compare);

    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Compare Products</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 col-md-3">
        <ProductList products={products} compare={actions.compare}/>
        </div>
        <div className="col-sm-9 col-md-9">
        {compareProducts.length >= 2 &&
          <CompareImage products={compareProducts}/>
        }
        </div>
        </div>
        <div className="row">
        <div className="col-sm-12 col-md-12">
        {compareProducts.length >= 2 &&
          <Compare products={compareProducts}/>
        }
        </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    products: state.product.products
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch)
  })
)(Home)
