ex02: 번들링 환경(webpack.config.js) 설정하기

1. 설치 패키지
[ex02] $ npm i -D webpack webpack-cli express

2. 번들링 환경(webpack.config.js) 설정
    - entry file 지정
    - output 지정

3. 스크립팅 
    npm run build 후 start
    package.json
    "scripts": {
    "start": "node dev-server",
    "build": "npx webpack"
  },

4. 빌드
[ex01] $ npm run build

5. 실행
[ex01] $ npm start