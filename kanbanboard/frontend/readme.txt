webpack 위치 바꿔서 package.json 에서 
--config config/webpack.config.js 설정해주기  
mode 값 세팅
--mode development , --mode production

babel-loader한테 엔진 쓸 때 babel config 알려주기
옵션주기 위해 loader: 'babel-loader'로 바꾸고 options 추가
loader: 'babel-loader',
    options: {
        configFile: path.resolve('config/babel.config.json') 절대 경로로 설정
    }

devtool: "eval-source-map" 디버그를 위해서 꼭 추가하기


npm i react-addons-update


