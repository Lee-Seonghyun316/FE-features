## 주관식 답변

### 1.1  CSR vs. SSR 차이를 설명하고, 각각의 장단점을 기술하세요. 

**CSR**

- 웹 페이지의 렌더링이 클라이언트 (브라우저) 측에서 일어나는 것입니다. 
- 장단점
  - 서버와 클라이언트 간의 데이터 트래픽이 감소하고 렌더링이 한번만 있기 때문에 페이지 이동이 빠르다는 장점이 있지만, SEO(검색최적화) 사용은 불가하다는 단점이 있습니다. 	
  - 보안 관련해서는 쿠키에 사용자 정보를 저장해야 해서 위험 요소가 될 수 있습니다.

SSR

- 첫 페이지의 렌더링을 클라이언트 측이 아닌 서버 측에서 처리해 주는 방식입니다.

- 장단점 
  - SEO 측면에서 유리합니다.
  - View 변경이 될 때마다 계속적으로 서버에 요청을 해야 하기 때문에 서버 부담이 커진다는 단점이 있습니다.
  - 보안 관련해서는 서버에서 세션으로 사용자의 정보를 저장할 수 있습니다.

### 1.2  CORS에러에 대해서 설명하고, SPA가 CORS에러를 방지하기 위해 서버단과 구현해야할 사항들을 기술하세요. HTTP 통신의 기본 원리를 단계적으로 설명해 주세요. 

**CORS(Cross-Origin Resource Sharing)에러**

**CORS**

- CORS는 다른 출처의 리소스가 필요한 경우, SOP(Same-Origin Policy)를 우회하기 위한 방법으로, 추가 HTTP 헤더를 이용하여, 특정 origin에서 실행 중인 웹 애플리케이션이 다른 origin의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제입니다. 
- 이때, origin은 protocol, host, port로 이루어지며 이 중 하나라도 다르면 다른 origin입니다. 

**CORS 에러**

- 브라우저는 CSRF(Cross-Site Request Forgery) 등 보안상의 이유로 SOP 규칙을 따르기 때문에, 다른 출처에서 제공하는 API를 사용하는 경우 CORS 에러가 발생합니다. 
- 브라우저를 거치지 않고 서버간 통신을 하는 경우에는 SOP 정책이 적용되지 않습니다. 

**SPA가 CORS 에러 방지를 위해 서버단과 구현해야 할 사항**

**Server**

- Access-Control-Allow-Origin 응답 헤더 세팅 서버측 응답에서 접근 권한을 주는 헤더를 추가하여 해결

- CORS 모듈 사용 옵션을 추가하여 특정 도메인/요청 접근을 허용

**preflight request/response**

- Preflight Request(Client -> Server) 예비 요청과 본 요청 2가지로 나누는데 OPTIONS 메서드를 통해 다른 도메인의 리소스에 요청을 전송하기에 안전한지 확인하고, 요청이 가능하다면 실제 요청을 보냅니다.  Client에서는 OPTIONS 요청과 함께 두 개의 다른 요청 헤더를 전송하는데, 실제 요청의 메서드와 실제 요청의 추가헤더에 대한 정보를 서버에 알려줍니다. 

- Preflight Response(Server-> Client) Server에서 허가 출저, 어떤 메서드와 헤더를 받을 수 있는지 여부와 함께 preflight request에 대한 응답을 캐시할 수 있는 시간을 알려줍니다. 

<hr/>

- Server에서 허가를 받으면, Client에서 본 요청을 전송합니다.  
- preflight를 보내면, 예비 요청을 미리 보내지 않도록 브라우저가 캐싱을 해두고, 같은 요청을 보낼 때 사전요청 없이 본 요청을 보냅니다. 

**Simple Request**

- Client에서 요청을 보내면서 cross origin인지 확인합니다.
- Simple Request 아래의 조건을 충족할 때만 가능합니다. 
  * 메서드는 GET POST HEAD 중 하나
  * 헤더는 Accept, Accept-Language, Content-Language, Content-Type 만 허용
  * Content-Type 헤더는 다음의 값들만 허용
    * application/x-www-form-urlencoded
    * multipart/form-data
    * text/plain

**Credentialed Request**

- 인증 관련 헤더를 포함할 때 사용하는 요청입니다. 

- 브라우저가 제공하는 비동기 리소스 요청 API인 SMLHttpRequest 객체나 fetch API는 별도의 옵션 없이 브라우저의 쿠키 정보나 인증과 관련된 헤더를 기본적으로 요청에 담지 않음으로, 아래의 옵션을 상황에 맞게 설정해 주어야 합니다. 

- 옵션

  * omit : cookie 를 전송하거나 받지 않는다.

  * same-origin : same origin이라면, 인증정보 등 쿠키를 전송합니다. 

  * include : cross-origin 호출에도 인증 정보 등 쿠키를 전송합니다. 

<br/>

- Client에서 axios로 통신한다면 withCredentials 설정을 ture로 넣어주면 인증정보를 전송합니다. 
- 서버에서는 Acess-Control-Allow-Credentials : true를 응답헤더에 넣어주어야 합니다. 
- 리액트 개발환경에서 서버 코드를 수정하지 않고 개발하고 싶다면 프록시 속성을 설정하는 방법도 있습니다. 

**HTTP 통신의 기본 원리**

- HTTP는 HTML과 같은 문서를 전송하기 위한 Application Layer 프로토콜. 웹 브라우저와 웹 서버의 소통을 위해 디자인.

- 클라이언트 - 서버 구조 클라이언트는 서버에 요청을 보내고 응답 대기. 서버가 요청에 대한 결과를 만들어 응답.
- 무상태 확장성을 위해 서버가 클라이언트의 상태를 보존하지 않음. 
- 비연결성 연결을 유지하지 않음.  TCP/IP 연결을 새로 맺는 것을 방지 하기 위해 HTTP 지속 연결로 해결
- HTTP Message 서버와 클라이언트가 양식에 맞춰서 요청, 응답
