import React from 'react';
import styles from './assets/css/EmailList.css';
import Email from './Email';

const EmailList = ({emails}) => {
    console.log(emails);
    return (
        <div>
            <ul className={styles.Emaillist}>
                {
                    emails.map(email => <Email key={email.no} no={email.no} firstName={email.firstName} lastName={email.lastName} email={email.email} />)
                }
            </ul>
        </div>
    );
};

export default EmailList;