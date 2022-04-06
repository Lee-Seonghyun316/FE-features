## Description

- Infinite scrolling, form 유효성 검사, 로그인 등의 FE 기능을 구현하였습니다.

## Usage

1. git clone

```
git clone https://github.com/Lee-Seonghyun316/FE-features.git
```

2. 폴더를 인터프린터나 컴파일러로 열기
3. 필요한 라이브러리 설치

```
npm install
```

4. 실행

```
npm run start
```

**<자세한 실행 방법>**

1.  Infinite scrolling

<img width="394" alt="스크린샷 2022-04-06 오후 11 42 37" src="https://user-images.githubusercontent.com/70502670/162001504-657fbfe1-1430-4ef4-b8ee-f2a7b5696890.png">

- Home 에서 스크롤하면 데이터 10개씩 100개가 무한 스크롤로 보여집니다.
- Intersection Observer 사용.

2.회원가입 모듈<br/>

<img width="394" alt="스크린샷 2022-04-06 오후 11 43 06" src="https://user-images.githubusercontent.com/70502670/162001584-9861ae85-4a3c-4bfb-a461-a9613f9c9451.png"><img width="390" alt="스크린샷 2022-04-06 오후 11 43 25" src="https://user-images.githubusercontent.com/70502670/162001610-38bf38c0-01ef-4316-8c8b-48ed1333401d.png">


- 아래 조건에 따라 유효성 검사를 하고, label 에서 해당하는 오류 메세지를 피드백으로 주어서 사용자의 수정을 유도합니다.
  - 회원명 : not null, text max 20자
  - 이메일 주소 또는 폰번호 : not null, text 형태로 이메일 형식, 휴대폰번호 형태인지 검증
  - 비밀번호 : not null, 8자 이상, 영소문자/대문자, 숫자, 특수문자 조합
  - 자기소개 : nullable, textarea 형태로 3줄 max 512자 이내
- 회원가입에 성공하면, 임시로 로컬 스토리지에 해당 유저 정보를 저장합니다.

3. 로그인 시 인증 & jwt 토큰 발급

<img width="388" alt="스크린샷 2022-04-06 오후 11 43 43" src="https://user-images.githubusercontent.com/70502670/162001627-c39f995b-b82d-4a37-b3f3-c68d8782de7b.png">


- 별도의 서버를 만들지는 않았으며, preflight request/response 를 구현하기 위한 함수를 만들어서 인증 후 jwt 토큰을 로컬 스토리지에 저장하였습니다.
- 아이디, 비밀번호의 유효성 검사 및 데이터와 매칭은 하지 않았으며 로그인 버튼을 누르면 토큰이 발급되어 로컬 스토리지에 저장된 것을 확인할 수 있습니다.

## 기술스택

- Javascript
- React
- CSS: styled-component
- prop-types

## 주관식 답변
- SUBJECTIVE.md 참고
- https://github.com/Lee-Seonghyun316/FE-features/blob/main/SUBJECTIVE.md

