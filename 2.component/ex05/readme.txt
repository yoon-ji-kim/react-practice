ex05: Component LifeCycle 

01. Class Component
    1) LifeCycle I  : Mount
        - Real DOM에 만들어지고 반영된 것
        1. constructor
        2. getDerivedStateFromProps: props로 받아온 값을 state에 동기화 (리턴 값을 state에 동기화)
        3. render***
        4. componentDidMount*** : 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후
    2) LifeCycle II : Update
        1. getDerivedStateFromProps
        2. shouldComponentUpdate * : 컴포넌트 성능 최적화(튜닝)에 사용할 수 있다.
        3. true 리턴 시 render ***
        4. getSnapshotBeforeUpdate : render 메소드 호출 후, DOM에 변화를 반영하기 직전에 호출
        5. componentDidUpdate ***: snapshot.replace~~ (저장해둔 snapshot을 hexColor로 변경하는 코드)


    3) LifeCycle III: Unmount
        - update 일어나다가 화면에서 사라지는 현상
        componentWillUnmount ***

02. Functional Component(Alternative) - useEffect로 Class 컴포넌트의 LifeCycle 함수 대체하기
    - 대체할 수 있는 것들
        1. getDerivedStateFromProps => if(boxColor !== color ) {setBoxColor(color);}
        2. After rendering(componentDidMount, componentDidUpdate) =>
        3. 변경된 상태에 따라 의존적으로 코드 실행 가능
        4. componentWillUnmount =>
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


1,2 참고해서 3,4 clock 만들기
3번은 class component
4번은 functional component

시간을 상태로 관리해서 1초마다 바껴야함 -> 매번 date 구해서 hours, minutes, seconds 구해서 저장
04 - 챌린지 :10초 마다 unmount해서 clock 없어졌다가 나오게 --> tick
