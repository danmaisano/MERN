import React, {useState} from 'react';

const NewToDo = (props) => {

    const addNew = (e) => {
        e.preventDefault()
        const input = document.getElementById("AddToDo").value;
        if(input !== ""){
            props.newTask({"task":input, "completed":false})
            document.getElementById("AddToDo").value = "";
        }
    }

    return(
        <div>
            <form className="newTaskForm" onSubmit={addNew}>
                <label className="fs-4" htmlFor="AddToDo">What do you need to do?</label>
                <input type='text' className="mt-2 textarea" id="AddToDo" name="AddToDo" />
                <button className="mt-2 btn btn-primary btn-sm">Add</button>

            </form>
        </div>
    )
}

export default NewToDo;