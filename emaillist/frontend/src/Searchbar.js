import React from 'react';
import styles from './assets/css/Searchbas.css';
const Searchbar = ({callback}) => {
    return (
        <div className={styles.Searchbar}>
            <input type='text' placeholder='찾기' onChange={e => {callback(e.target.value)}}/>
        </div>
    );
};

export default Searchbar;