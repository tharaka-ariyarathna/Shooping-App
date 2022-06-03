import { combineReducers } from 'redux';
import {productReducer, selectedProductReducer} from './ProductReducer' ;

const reducers = combineReducers({
    allProducts: productReducer,
    selectedProduct : selectedProductReducer
}) ;

export default reducers ;