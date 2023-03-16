import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState("/"); //#뒤의 /저장하기 위함
    useEffect(() => {
        //mount 될 때 함수 호출
        window.addEventListener('hashchange', handlerHashChange);
        return () => {  //unmount 시 이벤트 없애기
            window.removeEventListener('hashchange', handlerHashChange)
        }
    },[]);


    const handlerHashChange = function() {
        console.log(window.location.hash); //주소창 가져오기
        setRoute(window.location.hash.substring(1));
    }


    //return (<div>Hash Route 직접 만들어 보기</div>);
    return(() => {
        switch(route) {
            case '/':
                return <Main />;
            case '/guestbook':
                return <Guestbook />;
            case '/gallery':
                return <Gallery />;
            default:
                return null;
        }
    })();
}