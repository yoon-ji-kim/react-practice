import React from 'react';
import './assets/css/App.css';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import EmailList from './EmailList';
import emails from './assets/json/data.json';

function App(props) {
    return (
        <div id='App' className={'App'}>
            <RegisterForm />
            <Searchbar />
            <EmailList emails={emails} />
        </div>
    );
}

export default App;