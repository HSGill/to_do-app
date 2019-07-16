import React from 'react';
import TaskList from './TaskList.js'

const Task = ({ taskList }) => {
    return (
        <div>
            {
                taskList.map((task, i) => {
                    return (<TaskList key={i} task1={task} />
                    );

                })
            }
        </div>
    );
}
export default Task;