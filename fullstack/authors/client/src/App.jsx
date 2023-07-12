import { useState } from 'react'
import AddAuthor from './assets/views/addAuthor'
import AllAuthors from './components/AllAuthors'
import UpdateAuthor from './assets/views/UpdateAuthor'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [authorList, setAuthorList] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  
  const deleteAuthor = (authorId) => {
    setAuthorList(authorList.filter((author) => author._id !== authorId))
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AllAuthors authorList={authorList} setAuthorList={setAuthorList} deleteAuthor = {deleteAuthor}/>} path="/"/>
          <Route element={<AddAuthor authorList={authorList} setAuthorList = {setAuthorList}/>} path="/authors/add"/>
          <Route element={<UpdateAuthor authorList={authorList} setAuthorList={setAuthorList} selectedAuthor={selectedAuthor} />} path="/authors/update/:id"/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
