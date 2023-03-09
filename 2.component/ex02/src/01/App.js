import React from 'react';

function App(props) {
    //스타일링을 객체로 전달
    const h1Style = {
        width: 200,
        height: '100px',
        padding: 20,
        color: '#111',
        backgroundColor: '#eeff99'
    };
    return (
        <div id='App'>
            <h1 style={h1Style}>Inline Styling</h1>

        </div>
    );
}

export default App;