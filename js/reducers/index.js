import { combineReducers } from 'redux';
import { productReducer } from './productReducer';

// console.log(productReducer);

let reducers = combineReducers({
    products: productReducer
});

export default reducers;