import React, { useState } from 'react';
import Detail from './views/detail';
import Update from './views/Update';
import Home from './views/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
const [ productList, setProductList ] = useState( [] )

const deleteProduct = (productId) => {
  setProductList(productList.filter((product) => product._id !== productId));
};

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home deleteProduct={deleteProduct} productList = {productList} setProductList = {setProductList}/>} path="/" />
          <Route element={<Detail deleteProduct={deleteProduct} productList = {productList} setProductList = {setProductList}/>} path="/products/:id" />
          <Route element={<Update />} path="/products/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

