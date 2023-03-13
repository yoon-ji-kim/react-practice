import React from 'react';
import styles from './assets/css/Task.css';

const Task = ({no, cardNo, name, done, callback}) => {
    return (
        <li className={styles.TaskList__Task}>
            <input 
                type='checkbox' 
                checked={done} 
                onChange={e => {
                    callback(cardNo, no, e.target.checked)
                }}/>
            {name}
            <a href='#' className={styles.TaskList__Task__remove} />
        </li>
    );
};

export default Task;