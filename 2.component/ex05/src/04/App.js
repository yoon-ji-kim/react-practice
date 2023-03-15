import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const getCurrentClockTime = () => {
        const now = new Date();
        const hours = now.getHours();

        return {
            hours: hours,
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
            session: hours > 12 ? 'pm': 'am'
        }
    }
    const [currentTime, setCurrentTime] = useState(getCurrentClockTime());
    const [ticks, setTicks] = useState(currentTime.seconds);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getCurrentClockTime());
            setTicks(t => t + 1);  
        }, 1000);

        return (() => {
            clearInterval(interval);
        });       
    }, []);

    //closer
    return (
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 0 ?
                null :
                <Clock 
                    message={'ex05: useEffect Hook example'}
                    hours={currentTime.hours}
                    minutes={currentTime.minutes}
                    seconds={currentTime.seconds}/>
            }
            
        </div>
    );
}

