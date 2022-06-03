import { ActionTypes } from "../Constants/Action-type";

const initialState = {
    products: [],
}

const initSelectedProduct = {
    product: {
        id:"",
        title:"",
        description:"",
        image:"",
        price:""
    }
}

export const productReducer = (state = initialState, {type, payLoad})  => {
    switch(type){
        case ActionTypes.SET_PRODUCT :
            return {...state, products:payLoad} ;

        default:
            return state ;
    }
}

export const selectedProductReducer = (state = initSelectedProduct, {type, payLoad}) => {
    switch(type){
        case ActionTypes.SELECTED_PRODUCT :
            return {...state, product: payLoad} ;

        case ActionTypes.REMOVE_SELECTED_PRODUCT :
            return {} ;
        
        default :
            return state ;
    }
}
