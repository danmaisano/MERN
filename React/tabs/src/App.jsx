import { useState } from 'react'
import './App.css'
import Tabs from './components/Tabs'

function App() {
  const tabs= [
    { label: "Tab 1", content: "Tab 1 Content" },
    { label: "Tab 2", content: "Tab 2 Content" },
    { label: "Tab 3", content: "Tab 3 Content" },
  ];

  const [tabsList, setTabsList] = useState(tabs)

  return (
    <>
      <Tabs tabsList = { tabsList }/>
    </>
  )
}

export default App
