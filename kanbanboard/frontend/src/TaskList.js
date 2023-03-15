import React, {useState} from 'react';
import Task from './Task';
import styles from './assets/css/TaskList.css';
const TaskList = ({tasks, callbackAddTask, callbackChangeTaskDone}) => {
    return (
        <div>
            <ul>
                {
                    tasks.map(task => <Task key={task.no} no={task.no} name={task.name} done={task.done} callbackChangeTaskDone={callbackChangeTaskDone} />)
                }
            </ul>
            <input type='text' 
                    placeholder={'Task 추가'}
                    className={styles.TaskList__add_task} 
                    onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                            callbackAddTask(e.target.value);
                        }
                    }} />
        </div>
    );
};

export default TaskList;