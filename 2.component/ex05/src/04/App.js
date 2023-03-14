import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    let now = new Date();
    const [hours, setHours] = useState(now.getHours());
    const [minutes, setMinutes] = useState(now.getMinutes());
    const [seconds, setSeconds] = useState(now.getSeconds());
    const [ticks, setTicks] = useState(0);
    
    useEffect(() => {
        setInterval(function() {
            //세팅할 거 다 하고, ticks 플러스
                let now = new Date(); 
                setHours(now.getHours());
                setMinutes(now.getMinutes());
                setSeconds(now.getSeconds());
                setTicks(ticks+1);
                console.log(ticks);
            }, 1000);
    }, [])
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