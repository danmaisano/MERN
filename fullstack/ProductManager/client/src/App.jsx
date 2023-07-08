import React from 'react';
import ProductForm from './components/ProductForm';
import Detail from './views/Detail';
import Update from './components/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path ="/" />
          <Route element={<Detail/>} path ="/products/:id" />
          <Route element={<Update/>} path ="/products/edit/:id"/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;

