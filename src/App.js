import React from 'react' ;
import Header from './Container/Header' ;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './Container/ProductListing';
import ProductDetails from './Container/ProductDetails';

const App = () => {
    return(
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route  path='/' exact element={<ProductList/>} />
                    <Route  path='/product/:productId' element={<ProductDetails/>} />
                    <Route>404 Not found</Route>
                </Routes>
            </Router>
        </div>
    ) ;
}

export default App ;