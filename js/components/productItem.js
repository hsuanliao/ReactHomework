import React, { Component } from 'react';

class ProductItem extends Component {
    handleChange(event) {
        let newQty = event.target.value;
        this.props.onChange(newQty);
    }
    
    render() {
        const product = this.props;   
        
        return (
            <div>
                <img src={ product.url } alt="Product image" />
                <p>{ product.name }</p>
                <p>{ product.price }</p>
                <input type="number" value={ product.qty } onChange={ this.handleChange.bind(this) } />
            </div>
        );  
    };
}

export default ProductItem;