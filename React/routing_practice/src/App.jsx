import { useState } from 'react'
import './App.css'
import Word from './components/word'
import Home from './components/home'
import Number from './components/number'
import Custom from './components/custom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}/> 
          <Route path="/number/:num" element = {<Number />}/> 
          <Route path="/word/:word" element = {<Word />}/> 
          <Route path="/custom/:customWord/:customColor/:customBG" element={<Custom />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
