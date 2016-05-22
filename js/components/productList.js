import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './productItem'
import { changeQty } from '../actions/productAction'

class ProductList extends Component {
    handleChange(index, newQty) {
        const { dispatch } = this.props;
        dispatch(changeQty(index, newQty));
    }
    
    calculateTotalAmount() {
        const { products } = this.props;
        
        let totalAmount = 0;
        for (var product of products.productList) {
            totalAmount += product.price * product.qty;
        }
        return totalAmount;
    }

    render() {
        const { products } = this.props;
        
        let productItems = products.productList.map((product, index) => {
           return <ProductItem key={ index } {...product} onChange={ this.handleChange.bind(this, index) } />
        });
        
        let totalAmount = this.calculateTotalAmount();     
           
        return (
            <div>
                <h1>商品清單</h1>
                <h2>商品總額: { totalAmount }</h2>
                { productItems }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

export default connect(mapStateToProps)(ProductList);