import axios from 'axios';
import React from 'react' ;
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {selectedProduct, removeSelectedProduct} from './../Redux/Actions/ProductActions' ;

const ProductDetails = () => {
    const {productId} = useParams() ;
    const dispatch  = useDispatch() ;
    const product = useSelector((state) => state.selectedProduct.product) ;

    const {id ,title, price, description, category, image}  = product ;
    

    const fetchProduct = async() => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => {console.log(err)}) ;

        dispatch(selectedProduct(response.data)) ;
    }

    useEffect(()=>{
        if(productId && productId !== "") fetchProduct() ;
        return () => {
            console.log("cleaned") ;
            dispatch(removeSelectedProduct()) ;
        }
        }, 
        [productId]
    ) ;

    return(
        <div className='ui grid container'>
               {Object.keys(product).length === 0 ? (<div>
                    Loading...
               </div>): (<div className='row' >
                <div className='ten wide column'>
                    <div className="ui divided items">
                        <div className="item">
                            <div className="image" style={{float:'left'}}>
                                <img src={image} style={{width:'300px', height: '400px' }}/>
                            </div>
                            <div className="content" style={{marginLeft:'150px', marginTop:'30px'}}>
                                <h1 className="header" style={{marginBottom:'20px'}}>{title}</h1>
                                <div className='meta' style={{marginBottom:'20px', fontWeight:'900', fontSize:'18px',color:'black'}}>
                                    <span>${price}</span>
                                </div>
                                <div className="meta" style={{marginBottom:'20px'}}>
                                    <span>{category}</span>
                                </div>
                                <div className="description" style={{marginBottom:'20px'}}>
                                    <p> {description}</p>
                                </div>
                                <div className="extra" style={{marginBottom:'20px'}}>
                                    <button className="positive ui button">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    ) ;
}

export default ProductDetails ;

/**/