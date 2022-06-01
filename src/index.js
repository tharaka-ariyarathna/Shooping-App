import React from 'react' ;
import ReactDom from 'react-dom/client' ;
import App from './App' ;
import { combineReducers } from 'redux';
import { productReducer } from './Redux/Reducers/ProductReducer';

const reducers = combineReducers({
    allProducts: productReducer
}) ;

const root = ReactDom.createRoot(document.getElementById('root')) ;

root.render(
    <App/>
) ;