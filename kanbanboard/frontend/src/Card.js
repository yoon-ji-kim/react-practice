import React,{useState} from 'react';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

const Card = ({no, title, description, tasks, callback}) => {
    const [showDetail, setShowDetail] = useState(false);
    
    return (
        <div className={styles.Card}>
            <div 
                className={
                    showDetail ? [styles.Card__Title, styles.Card__Title__open].join(' ') : styles.Card__Title}
                    onClick={e => setShowDetail(!showDetail)}> 
                {title}
             </div>
            {
                //아래는 클릭시 그려질 부분
            showDetail ?
                <div className={styles.Card__Details}>
                    {description}
                    <TaskList cardNo={no} tasks={tasks} callback={callback} /> 
                </div>
                :
                null
            }
        </div>
    );
};

export default Card;