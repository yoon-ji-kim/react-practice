import React from 'react';
import styles from './assets/css/EmailList.css';

//emails.map(email => <Email key={email.no} no={email.no} firstName={email.firstName} lastName={email.lastName} email={email.email} />)
const EmailList = ({emails, callbackDeleteEmail}) => {

    const deleteClickEvent = (e, params) => {
        e.preventDefault();
        callbackDeleteEmail(params);
    }
    return (
        <div>
            <ul className={styles.Emaillist}>
                {
                    emails.map(email => <li key={email.no}>
                        {email.firstName+email.lastName}
                        <br/>
                        {email.email}
                        <a href='' onClick={(e) =>deleteClickEvent(e, email.no)}></a>
                    </li>
                        )
                }
            </ul>
        </div>
    );
};

export default EmailList;