import { ActionTypes } from "../Constants/Action-type";

export const setProducts = (products) => {
    return({
        type: ActionTypes.SET_PRODUCT, 
        payLoad: products 
    }) ;
} ;

export const selectedProduct = (product) => {
    return({
        type: ActionTypes.SELECTED_PRODUCT,
        payLoad: product
    }) ;
} ;

export const removeSelectedProduct = () => {
    return({
        type: ActionTypes.SELECTED_PRODUCT
    }) ;
} ;