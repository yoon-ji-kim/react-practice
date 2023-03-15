import React, {useState, useEffect} from 'react';
import './assets/css/App.css';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import EmailList from './EmailList';
//import data from './assets/json/data.json';

function App() {
    const [emails, setEmails] = useState([]);

    const fetchEmails = async () => {
        try{
            const response = await fetch('/api/emaillist',{
                method: 'get',
                headers: {
                    'Accept': 'application/json'
                }
            });
            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }
            setEmails(json.data);
        } catch(err){
            console.log(err.message);
        }
    }
    const searchEmails = async (keyword) => {
        try{
            const response = await fetch(`/api/email?keyword=${keyword}`,{
                method: 'get',
                headers: {
                    'Accept': 'application/json'
                }
            });
            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }
            setEmails(json.data);
        } catch(err){
            console.log(err.message);
        }
    }
    const addEmail = async (newEmail) => {
        try{
            const response = await fetch(`/api/email`,{
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newEmail)
            });
            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }
            newEmail.no = json.data.no;
            setEmails([newEmail, ...emails]);
        } catch(err){
            console.log(err.message);
        }
    }
    const deleteEmail = async (no) => {
        try{
            const response = await fetch(`/api/email/${no}`,{
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }
           const newEmails = emails.filter((email) => email.no !== no);
           setEmails(newEmails);
        } catch(err){
            console.log(err.message);
        }
    }
    useEffect(() => {
        fetchEmails();
    }, [])
    //키워드 바꼈을때 searchbar에서
    const notifyKeyWordChanges = function(keyword) {
        //emails 내용 변경 조건=> keyword가 firstname에 있거나!(or) lastname에 있거나 email에 있으면 출력
        //const emails = data.filter(e => e.firstName.indexOf(keyword) !== -1|| e.lastName.indexOf(keyword) !== -1 || e.email.indexOf(keyword) !== -1 );
        searchEmails(keyword);
    }
    return (
        <div id='App' className={'App'}>
            <RegisterForm callbackAddEmail={addEmail}/>
            <Searchbar callbackSearch={notifyKeyWordChanges}/>
            <EmailList emails={emails} callbackDeleteEmail={deleteEmail}/>
        </div>
    );
}

export default App;