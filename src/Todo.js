import React from 'react';
import './todo.css'
import Task from './Task.js';
const todo =  ({searchChange, onSubmit, taskList}) =>{

    return (
        <div className="" >
                   <h3 className="f3">To Do APP</h3>

            <input type="text" onChange={searchChange} ></input>
            <button id="addTask" onClick={onSubmit}>Add Task</button>
            <Task taskList={taskList}/>
        </div>
    )
}
export default todo;