import React,{useState} from 'react';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

const Card = ({no, title, description}) => {
    const [showDetail, setShowDetail] = useState(false);
    const [tasks, setTasks]= useState([]);  //Card 클릭시 tasklisk 받아오기

    const addTask = async (taskName) => {
        console.log(taskName);
    }

    return (
        <div className={styles.Card}>
            <div 
                className={
                    showDetail ? 
                        [styles.Card__Title, styles.Card__Title__open].join(' ') 
                        : styles.Card__Title
                    }
                    onClick={async () => {
                        try {
                            if(!showDetail) {
                                const response = await fetch(`/api/task?cardNo=${no}`, {
                                    method: 'get',
                                    headers: {
                                        'Accept': 'application/json'
                                    }
                                });
                                if(!response.ok){
                                    throw new Error(`${response.status} ${response.statusText}`);
                                }

                                const json = await response.json();
                                if(json.result !== 'success'){
                                    throw new Error(`${json.result} ${json.message}`)
                                }

                                setTasks(json.data);
                            }
                        } catch (error) {
                            console.log(err.message);
                        }
                        setShowDetail(!showDetail)}
                    }> 
                {title}
             </div>
            {
            //아래는 클릭시 그려질 부분
            showDetail ?
                <div className={styles.Card__Details}>
                    {description}
                    <TaskList cardNo={no} tasks={tasks} callbackAddTask={addTask} /> 
                </div>
                :
                null
            }
        </div>
    );
};

export default Card;