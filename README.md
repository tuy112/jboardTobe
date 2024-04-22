# Jboard React version

## React.js + Node.js Collaboration Project

Frontend : React.js
Backend : Node.js (Express.js) + MySQL

### `목적` : 나를 설명하는 페이지가 있으면 어떨까 싶어서 만들기 시작한 페이지

### `기능` : 웹 반응형 페이지 + Jboard(게시판) + three.js(3D가상공간) + 실시간 채팅 기능 (미완.. 현재도 계속 작업 중입니다)\

### `의의` : React 프론트 개발과 Node.js (Express.js)를 활용한 백엔드 개발 모두가 들어가있는 프로젝트

#### Jboard
공통 migration

- user
npx sequelize model:generate --name Users --attributes userId:Integer,email:String,nickname:String,password:String,passwordConfirm:String

 

- board
npx sequelize model:generate --name Boards --attributes userId:Integer,boarId:Integer,nickname:String,author:String,content:String,hashtag:String,image:String

 

- comment
npx sequelize model:generate --name Cmts --attributes userId:Integer,boardId:Integer,cmtId:Integer,content:String