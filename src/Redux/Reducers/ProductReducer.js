import { ActionTypes } from "../Constants/Action-type";

const initialState = {
    products: []
}

export const productReducer = (state, {type, payLoad}) => {
    switch(type){
        case ActionTypes.SET_PRODUCT :
            return state ;
            break ;

        default:
            return state ;
    }
}