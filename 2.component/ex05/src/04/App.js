import { func } from 'prop-types';
import React, {useState, useEffect, useRef} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    let now = new Date();
    const [hours, setHours] = useState(now.getHours());
    const [minutes, setMinutes] = useState(now.getMinutes());
    const [seconds, setSeconds] = useState(now.getSeconds());
    const [ticks, setTicks] = useState(seconds);

    useInterval(() => {
        setTicks(tick => tick+1);
        // setTicks(function (tick) {
        //     return tick + 1;
        // });
    }, 1000)

    function useInterval(callback, delay) {
        //interval 변경하지 않고 최근 interval callback을 가리키는 savedCallback
        const savedCallback = useRef(); //useRef: 리렌더링 방지
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);     //callback 데이터 바뀔때 마다 savad.current 값을 업데이트

        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if(delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        },[delay])
    }

    useEffect(() => {
            //세팅할 거 다 하고, ticks 플러스
            let now = new Date(); 
            setHours(now.getHours());
            setMinutes(now.getMinutes());
            setSeconds(now.getSeconds());
    })
    //closer
    return (
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 0 ?
                null :
                <Clock 
                    message={'ex05: useEffect Hook example'}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}/>
            }
            
        </div>
    );
}
