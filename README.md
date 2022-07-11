○ 프로젝트 실행 방법

    1. node.js 설치    https://nodejs.org/ko/
    2. git 설치        https://git-scm.com/
    3. 시작 프로그램에서 git bash 실행후
    4. cd c:// 입력
    5. git clone git@github.com:sanil00/countUp_project.git 입력
    6. cd countUp_project 입력
    7. npm install 입력
    8. npm start 입력

○ 사용한 기술과 선택한 이유
    
    1. styled-components 
        기존에 사용하던 css파일을 따로 사용하는 방법은 파일을 따로 관리하기 때문에 파일 구조의 깊이가 깊어지거나
        파일의 갯수가 많아지는등의 단점이 있고 
        stylesheet 의 경우 컴포넌트가 div로만 구성되는 경우가 생겨 컴포넌트의 구조를 
        정확하게 파악하기 힘든 경우가 있었습니다. 
        styled-components는 컴포넌트 안에서 해결할수 있으며 div자체의 이름을 바꿔서 사용할수 있기때문에 
        구조파악을 더 쉽게 할수 있기때문에 선택했습니다.

    2. 2개를 구현한 이유
        과제의 요구사항은 react와 DOM API 만을 사용해야하므로 CountUpReact를 구현하였고 그 외에도 
        CountUpCss의 방법이 조금 더 깔끔한 코드인것 같아 구현해 보았습니다. 
