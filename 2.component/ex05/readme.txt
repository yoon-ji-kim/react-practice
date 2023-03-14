ex05: Component LifeCycle 

01. Class Component
    1) LifeCycle I  : Mount
        - Real DOM에 만들어지고 반영된 것
        1. constructor
        2. getDerivedStateFromProps: props로 받아온 값을 state에 동기화 (리턴 값을 state에 동기화)
        3. render***
        4. componentDidMount*** : 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후
    2) LifeCycle II : Update

    3) LifeCycle III: Unmount
        - update 일어나다가 화면에서 사라지는 현상

02. Functional Component(Alternative) - useEffect로 Class 컴포넌트의 LifeCycle 함수 대체하기

=====================================================================================================================================================================================
$ npm i

1. 설치
    1) 개발툴
        $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
    2) react library
        $ npm i react react-dom prop-types styled-components

2. webpack.config.js 설정
3. babel.config.json 설정
5. npm 스크립팅
6. 테스트 서버 실행
    $ npm run debug src=(01|02|03|04)
