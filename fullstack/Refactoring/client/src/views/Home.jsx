import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Form from '../components/form.jsx';
import AllProducts from '../components/AllProducts.jsx';
import Update from '../components/Update.jsx';
const View = ( props ) => {
	const {productList, setProductList, deleteProduct} = props

	
		return (
			<div>
				<Form productList={productList} setProductList={setProductList} />
				<hr />
				<AllProducts productList = {productList} setProductList = {setProductList} deleteProduct = {deleteProduct}/>
			</div>
		);
	};

	export default View;
