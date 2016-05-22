import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ProductList from './components/productList';
import productReducers from './reducers';

let store = createStore(productReducers);
let rootElement = document.getElementById('content');

render (
    <Provider store={store}>
        <ProductList />
    </Provider>,
    rootElement
);