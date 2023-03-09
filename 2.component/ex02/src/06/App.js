import React from 'react';
import './assets/scss/App.scss';
import styled from 'styled-components';
import Content from './Content';
//리턴하는 component 함수 StyledH1에서 받기
const StyledH1 = styled.h1`
    width: 180px;
    text-align: center;
    margin: 100px auto;
    padding: 20px 20px 20px 20px;
    border: 2px solid #999;
    color: #1144fe;
    background-color: #cdc1ce
`;

const StyledDiv = styled.div`
    text-align: center;
    color: #foo;
    font-size: 20px;
    font-weight: bold;
`;

//기능/내용 추가 할 수 없어서 Content.js를 만들어 사용
//안에 내용은  {props.children}에 들어감
// const Content = styled.p`
//     color: #foo;
//     font-size: 20px;
//     font-weight: bold;
// `;

function App(props) {
    return (
        <StyledDiv id='App'>
            <StyledH1>CSS in JS </StyledH1>
            <Content color={'#foo'}>
                Styled Components 연습
            </Content>
        </StyledDiv>
    );
}

export default App;