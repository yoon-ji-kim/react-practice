import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(0);
    
    useEffect(() => {
        setInterval(function() {
            //세팅할 거 다 하고, ticks 플러스
        }, 1000);
    }, [])
    // <Clock
    //     message={'ex05: useEffect Hook example'}
    //     hours={state.hours}
    //     minutes={state.minutes}
    //     seconds={state.seconds}/>
    //closer
    return (
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 0 ?
                null :
                <Clock
                    message={'ex05: useEffect Hook example'}
                    hours={'10'}
                    minutes={'20'}
                    seconds={'30'}/>

            }
            
        </div>
    );
}