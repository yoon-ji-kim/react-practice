import React from 'react';

function Clock(props) {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    return (
        /**
         *  comment01: JSX 밖은 JavaScript 구문(주선구문)이 가능하다.
         * 
         */
        <div
            /*
                comment02: 여기서도 주석이 가능하지만 비추
             */
         className='clock' title='시계'
        >
            {
                /*
                comment03: 표현식이 실행되는 블록안에서 주석 다는 방식 추천
                */
            }
            {
                /*
                comment04: JSX는 HTML이 아니다 **
                <!-- --> HTML 주석 사용 불가능
                */
            }
            {('0' + (hours > 12 ? hours -12 : hours)).slice(-2)}
            {':'}
            // comment05: JSX안에서 JavaScript 주석 구문을 사용하면 화면에 그대로 나온다.
            {('0' + minutes).slice(-2)}
            {':'}
            {('0' + seconds).slice(-2)}
            {' '}
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    );
}

export default Clock;