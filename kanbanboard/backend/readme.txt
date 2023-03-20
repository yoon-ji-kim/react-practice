1. backend
	1) 개발(테스트)
	- eclipse에서 스프링부트 애플리케이션 실행(ctrl +F11)
	
	2) 빌드(배포)
		#  mvn -f kanbanboard/backend exec:exec clean package
		테스트
		# java -Dspring.profiles.active=production -jar kanbanboard/backend/target/kanbanboard.jar
		
2. ssh 연결(ssh key 인증)
	1) key 생성(비대칭키)
		$ ssh-keygen -t rsa -b 2048 -m PEM -C "write comment" 
	2) key 생성 확인
		- ~/.ssh/id_rsa : private key(개인키) - 복호화
		- ~/.ssh/id_rsa.pub : public key(공개키) - 암호화
	3) 공개키를 서버에 설치
		# mv ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys
	4) 연결 테스트
		# ssh -i mykey.pem root@192.168.10.123 (Linux)
	5) ssh 연결 환경(변수)설정
		- ~/.ssh/environment	
		===============
		PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/douzone2023/java/bin:/usr/local/douzone2023/git/bin:/usr/local/douzone2023/maven3.8/bin:/usr/local/douzone2023/mariadb/bin:/usr/local/douzone2023/python/bin:/usr/local/douzone2023/node/bin:/root/bin
		===============
		- etc/ssh/sshd_config 환경 변수 적용
			PermitUserEnviroment yes
	6) jenkins
		- Publish over SSH Plug-in 설치
		- Publish over SSH 플러그인 ssh server 등록
			name: springboot-publish-server
			hostname: 192.~~~
		- 프로젝트의 빌드 후 조치(post-built action) 설정
			프로젝트 빌드 후 조치의 send build artifacts over ssh 설정
			kanbanboard.jar : transger 설정
			launch.sh : transfer + execution
				- resource plugin 설정필요
		
=================================================================
2. frontend
	1) 설치
	- 개발툴
	$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react case-sensitive-paths-webpack-plugin
	- library
	$ npm i react react-dom prop-types styled-components react-addons-update
	2) 설정
		-webpack.confing.js
		-babel.config.json
	3) npm 스크립팅
		"scripts": {
	    "start": "npx webpack serve --config config/webpack.config.js --progress --mode development",
	    "build": "npx webpack --config config/webpack.config.js --mode production"
	  },
	  
	4) 테스트(개발 모드)
		$ npm start
	5) 빌드(배포)
		$ npm run build

	
	jenkins security ~~ SSH 작업 다 한 후
		- 파일 옮기는 transfer
		- 파일 어떡할 건지 execution

		