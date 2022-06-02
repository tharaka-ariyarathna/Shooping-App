import React from 'react' ;
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products) ;
    const {id, title} = products[0] ;

    return(
        <div className='four column wide'>
            <div className='ui link cards'>
            <div class="card">
                    <div class="image">
                        <img src="https://dynamic-cdn.zenegal.store/fit-in/700x1050/products/15569/mens-polo-t-shirt-16064637890944.jpg"/>
                    </div>
                    <div class="content">
                        <div class="header">{title}</div>
                    </div>
                </div>
            </div> 
        </div>
    ) ;
}

export default ProductComponent ;