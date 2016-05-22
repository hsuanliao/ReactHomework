import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const product = this.props;   
        
        return (
            <div>
                <img src={ product.url } alt="Product image" />
                <p>{ product.name }</p>
                <p>{ product.price }</p>
                <input type="number" value={ product.qty } />
            </div>
        );  
    };
}

export default ProductItem;