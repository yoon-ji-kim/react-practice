ex01. Property (props)
-   1. 컴포넌트의 데이터
-   2. 부모에서 자식으로 전달
    - 컴포넌트 간의 통신, Data Flow
    - Top -> Down
-   3. 자식에서 변경 불가
-   4. 부모가 소유한 데이터

src/01: FoodList: 함수 컨포넌트

=====================================================================================================================================================================================
$ npm i

1. 설치
    1) 개발툴
        $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
    2) react library
        $ npm i react react-dom

2. webpack.config.js 설정
3. babel.config.json 설정
5. npm 스크립팅
6. 테스트 서버 실행
    $ npm run debug src=(01|02|03|04)