import { ActionTypes } from "../Constants/Action-type";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, {type, payLoad})  => {
    switch(type){
        case ActionTypes.SET_PRODUCT :
            return {...state, products:payLoad} ;
            break ;

        default:
            return state ;
    }
}

