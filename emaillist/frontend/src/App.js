import React, {useState} from 'react';
import './assets/css/App.css';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import EmailList from './EmailList';
import data from './assets/json/data.json';

function App(props) {
    const [emails, setEmails] = useState(data);
    //키워드 바꼈을때 searchbar에서
    const notifyKeyWordChanges = function(keyword) {
        //emails 내용 변경 조건=> keyword가 firstname에 있거나!(or) lastname에 있거나 email에 있으면 출력
        const emails = data.filter(e => e.firstName.indexOf(keyword) !== -1|| e.lastName.indexOf(keyword) !== -1 || e.email.indexOf(keyword) !== -1 );
        setEmails(emails);
    }
    return (
        <div id='App' className={'App'}>
            <RegisterForm />
            <Searchbar callback={notifyKeyWordChanges}/>
            <EmailList emails={emails} />
        </div>
    );
}

export default App;