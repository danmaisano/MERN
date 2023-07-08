import React, { useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import AllProducts from '../components/ProductList';
const View = (props) => {
    
    const [productList, setProductList] = useState([]);
    
    return (
        <div>
            <ProductForm productList={productList} setProductList={setProductList} />
            <hr/>
            <AllProducts productList={productList} setProductList={setProductList} />
        </div>
    )
}
export default View;
