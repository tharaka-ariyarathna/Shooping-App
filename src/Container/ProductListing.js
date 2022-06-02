import React from 'react' ;
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import {setProducts} from './../Redux/Actions/ProductActions' ;
import ProductComponent from './ProductComponent';

const ProductList = () => {
    //Calling useSelector to get all in state ;
    const products = useSelector((state) => state) ;
    const dispatch = useDispatch() ;

    console.log(products) ;

    //Getting data to app from Fake Store API
    const getStoreItemData = async() => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch(err => {
                console.log("Error : "+ err)
            }) ;
        //Updating state using useDispatch
        dispatch(setProducts(response.data)) ;
    }

    //Making app fetches data when mounted --[]
    useEffect(() =>{
        getStoreItemData() ;
    }, []) ;

    return(
        <div className="ui grid container">
            <ProductComponent />
        </div>
    ) ;
}

export default ProductList ;