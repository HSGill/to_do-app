import React from 'react';
import TaskList from './TaskList.js'
const Task = ({ taskList }) => {
    return (
        <div>
            {
                taskList.map((task, i) => {
                    return (<TaskList key={i} task={task} />
                    );

                })
            }
        </div>
    );
}
export default Task;