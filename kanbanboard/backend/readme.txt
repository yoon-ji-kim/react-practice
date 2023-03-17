1. 개발(테스트)
	- eclipse에서 스프링부트 애플리케이션 실행(ctrl +F11)

2. 빌드 & 배포
	1) 빌드 메이블 골
		(repository가 kanbanboard인 경우)
		- mvn -f backend
		react-pratice가 root인 경우
		  mvn -f kanbanboard/backend clean package
	
	
	
	jenkins security ~~ SSH 작업 다 한 후
		- 파일 옮기는 transfer
		- 파일 어떡할 건지 execution
	2) 배포 후 실행
		application.yaml의 production들이 실행됨
		- java -Dspring.profiles.active=production -jar kanbanboard/backend/target/kanbanboard.jar
		