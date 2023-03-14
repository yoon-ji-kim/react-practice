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
        // setTicks(tick {
        //     return tick + 1;
        // });
    }, 1000)

    function useInterval(callback, delay) {
        //callback 데이터가 바뀔때 마다 savad.current 값이 새로운 callback 데이터로  업데이트
        const savedCallback = useRef();
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]); 

        useEffect(() => {                     
        //delay가 있으면 타이머를 재실행
            function tick() {                 //useEffect()는 콜백함수가 변경될 때마다 업데이트해서
                savedCallback.current();      //useEffect()내의 setInterval()은 재실행되지 않고 새 업데이트 된 콜백 함수 실행가능
            }
            if(delay !== null) {
                let intervalId = setInterval(tick, delay);
                return () => clearInterval(intervalId);
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


//useRef(): 리렌더링 방지, 컴포넌트의 전 생애주기 동안 유지해 useRef가 관리하는 값은 변경되도 컴포넌트가 리렌더링 되지 않음
//useState 사용하여 관리할 경우 값 변경 시 리렌더링이 일어나고 useEffect()내부에서 savedCallback 값이 변경될 때마다 리렌더링 발생
//두번째 useEffect() 내부에서 savedCallback 값을 확인하면 초기값만 가져오게됨