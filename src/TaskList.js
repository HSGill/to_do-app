import React from 'react';
import './TaskList.css';
import FlipMove from 'react-flip-move';

const TaskList =({task1}) => {
    return (
      
        <div  className="zone blue">
        <ul >
          <li >{task1}</li>
        </ul>
      </div>

      
      )
    }
export default TaskList;