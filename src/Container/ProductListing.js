import React from 'react' ;
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import ProductComponent from './ProductComponent';

const ProductList = () => {
    const getStoreItemData = async() => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch(err => {console.log("Error : "+ err)}) ;
        
            console.log(response) ;
    }

    const products = useSelector((state) => state) ;
    console.log(products) ;

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