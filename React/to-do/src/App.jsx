import { useState} from 'react'
import './App.css'
import ToDo from './components/ToDo'
import NewToDo from './components/NewToDo'

function App() {
  const savedTaskList = localStorage.getItem('taskList');
  const [taskList, setTaskList] = useState(JSON.parse(savedTaskList))

  const newTaskAdded = (newTask) => {
    setTaskList([...taskList,newTask])
  }

  return (
    <>
        <NewToDo newTask = {newTaskAdded}/>
        <ToDo taskList = {taskList} setTaskList={setTaskList}/>
    </>
  )
}

export default App
