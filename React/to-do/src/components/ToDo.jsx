import React, {useState, useEffect} from 'react';

const ToDo = (props) => {

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(props.taskList));
    }, [props.taskList]);
    
    const deleteTask = (idx) => {
        const updatedTaskList = [...props.taskList]
        updatedTaskList.splice(idx,1);
        props.setTaskList(updatedTaskList);
    }

    const crossOff = (idx) => {
        const updatedTaskList = [...props.taskList]
        updatedTaskList[idx].completed = !updatedTaskList[idx].completed;
        props.setTaskList(updatedTaskList)
    }

    return(
        <div className ="toDoList">
            <h4 className='mt-5 text-start'>Your To-Do List:</h4>
            <ul className='listOfTasks'>
                {props.taskList.map((task,idx) => (
                    <li className = "tasks" key={idx}>
                        <p className={`taskText ${task.completed ? 'text-decoration-line-through' : ""}`}>{task.task}</p>
                        <input onClick ={() => crossOff(idx)}type="checkbox" name="complete" className='ms-5'/>
                        <button onClick={() => deleteTask(idx)} className = "ms-3 btn-secondary btn btn-sm">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDo;

