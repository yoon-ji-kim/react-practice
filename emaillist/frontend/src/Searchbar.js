import React from 'react';
import styles from './assets/css/Searchbas.css';
const Searchbar = ({callbackSearch}) => {
    return (
        <div className={styles.Searchbar}>
            <input type='text' 
                placeholder='찾기' 
                onKeyDown={(e) => {
                    if(e.key ==='Enter'){
                        callbackSearch(e.target.value);
                    }
                }
                //onChange={e => callbackSearch(e.target.value)
            }/>
        </div>
    );
};

export default Searchbar;