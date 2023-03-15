import React from 'react';
import styles from './assets/css/RegisterForm.css';
const RegisterForm = ({callbackAddEmail}) => {
    const onClickEvent = e => {
        e.preventDefault();
        const newEmail = {
            no: null,
            firstName: e.target.firstName.value,
            lastName : e.target.lastName.value,
            email: e.target.email.value
        }
        e.target.firstName.value = '', e.target.lastName.value = '', e.target.email.value ='';
        callbackAddEmail(newEmail);
    }
    return (
        <form className={styles.RegisterForm} onSubmit={onClickEvent}>
            <input type='text' id='firstName' name='firstName' placeholder='성' className={styles.InputFirstName} />
            <input type='text' id='lastName' name='lastName' placeholder='이름' className={styles.InputLastName} />
            <input type='text' id='email' name='email' placeholder='이메일' className={styles.InputEmail} />
            <input type='submit' value='등록'/>
        </form>
    );
};

export default RegisterForm;