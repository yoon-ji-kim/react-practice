import React from 'react';
//더 선호되는 방식
function Clock02(props) {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    //13   01
    //12   00
    //11   011  slice -2 : 맨 뒤에서 두개 자름
    //('0' + (hours > 12 ? hours -12 : hours)).slice(-2)
    return (
        <div>
            {('0' + (hours > 12 ? hours -12 : hours)).slice(-2)}
            {':'}
            {('0' + minutes).slice(-2)}
            {':'}
            {('0' + seconds).slice(-2)}
            {' '}
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    );
}

export default Clock02;