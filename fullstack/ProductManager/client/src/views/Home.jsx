import React, { useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import AllProducts from '../components/ProductList';
const View = (props) => {
    
    const [productList, setProductList] = useState([]);
    const removeFromDom = productId => {
        setProductList(productList.filter(product => product._id != productId))
    }
    
    return (
        <div>
            <ProductForm productList={productList} setProductList={setProductList} />
            <hr/>
            <AllProducts productList={productList} setProductList={setProductList} removeFromDom = {removeFromDom}/>
        </div>
    )
}
export default View;
