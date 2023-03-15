import React, {useState, useEffect} from 'react';
import styles from './assets/css/KanbanBoard.css';
import CardList from './CardList';

const KanbanBoard = () => {
    const [cards, setCards] = useState([]);

    //mount 됐을 때 실행되어야함
    const fetchCards = async () => {
        try {
            const response = await fetch('/api/card', {
            //Access-Control-Allow-Origin origin: http://localhost:8080 오리진이 달라서 오류 발생
            // webpack에 proxy 설정해서 해결
                //option , header정보
                method : 'get',
                headers: {
                    'Accept': 'application/json',
                }
            });
            if(!response.ok) { //200 아닐 경우 error
                throw new Error(`${response.status} ${response.statusText}`);
            }
            //response body json으로 만들기  json(): 비동기함수라서 await 필요
            const json = await response.json();
            if(json.result !== 'success') { //success 아닐 경우 error
                throw new Error(`${json.result} ${json.message}`)
            }

            setCards(json.data);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchCards();
    }, [])

    return (
        <div className={styles.KanbanBoard}>
            <CardList key={'To Do'} title={'To Do'} cards={cards.filter(card => card.status === 'ToDo')} />
            <CardList key={'Doing'} title={'Doing'} cards={cards.filter(card => card.status === 'Doing')} />
            <CardList key={'Done'} title={'Done'} cards={cards.filter(card => card.status === 'Done')} />
        </div>
    );
};

export default KanbanBoard;
