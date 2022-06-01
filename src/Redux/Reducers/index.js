import { combineReducers } from 'redux';
import { productReducer } from './Redux/Reducers/ProductReducer';

const reducers = combineReducers({
    allProducts: productReducer
}) ;