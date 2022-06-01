import { ActionTypes } from "../Constants/Action-type";

const initialState = {
    products: [{
        id: 1,
        title: "Shirt",
        description : "POLO"
    }]
}

export const productReducer = (state = initialState, {type, payLoad}) => {
    switch(type){
        case ActionTypes.SET_PRODUCT :
            return state ;
            break ;

        default:
            return state ;
    }
}

