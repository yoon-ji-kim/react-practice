import React from 'react';
import styles from './assets/css/App.css';
import Banner01 from './Banner01';
import Banner02 from './Banner02';
function App(props) {
    //webpack css-loader 설정 필요!
    return (
        <div id='App'>
            <h1 className={styles.Header}>CSS Module II</h1>
            <Banner01 />
            <Banner02 />
        </div>
    );
}

export default App;