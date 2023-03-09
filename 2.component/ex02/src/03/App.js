import React from 'react';
import styles from './assets/css/App.css';

function App(props) {
    //webpack css-loader 설정 필요!
    return (
        <div id='App'>
            <h1 className={styles.Header}>CSS Module I</h1>
        </div>
    );
}

export default App;