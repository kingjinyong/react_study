import { useState } from "react";
import "./App.css";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
// import bg from "./assets/bg.png";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail.jsx";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoes.map((a, i) => {
                    return (
                      <Item title={a.title} content={a.content} i={i}></Item>
                    );
                  })}
                </Row>
              </Container>
            </div>
          }
        />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>

        <Route path="*" element={<div>없는페이지예요</div>} />
      </Routes>
    </div>
  );
}
function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Item(props) {
  return (
    <Col>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </Col>
  );
}

export default App;
/*
이미지 넣는 법
1. css 파일에서는 그냥 ./이미지 경로
ex) .main-bg {
     height: 300px;
background-image: url("./assets/bg.png"); 
     background-size: cover;
     background-position: center;
   }
       이런 식으로

2. html 안에서 이미지 집어 넣고 싶으면
import 작명 from './이미지경로' 한 다음에
이미지 경로가 필요한 곳 에서 작명한 것 사용
<img> 태그 쓰고싶으면 <img src={bg}/> 이런 식으로 쓰기

html에서 public 폴더 이미지 사용할 때는 그냥 -> /이미지경로
주의점: codding.com에 발행하면 문제 없는데
       codding.com/어쩌구/에 발행 시 문제.
       그럴 경우
       -> {process.env.PUBLIC_URL + '/이미지경로'} 로 작성

다른 파일에 있던 변수 가져오려면
1. 변수를 export 하고
2. import 하면 끝

export 하려면
export default 변수명;
import 하려면
import 작명 from '파일경로'

export 여러개 하려면
export {변수1, 변수2}

함수도 export 가능

 <Item
  title={shoes[0].title}
  content={shoes[0].content}
  image={1}
></Item>
<Item
  title={shoes[1].title}
  content={shoes[1].content}
  image={2}
></Item>
<Item
  title={shoes[2].title}
  content={shoes[2].content}
  image={3}
></Item> 

----------이거를


{shoes.map(function (a, i) {
  return (
    <Item title={a.title} content={a.content} image={i + 1}></Item>
  );
})}

이런 식으로 함 ㅋㅋ


페이지 나누는 법(리액트 미사용)
1. html 파일 만들어서 상세페이지내용 채움
2. 누가 /detail로 접속하면 html 파일 보내줌

페이지 나누는 법(리액트 사용)
1. 컴포넌트 만들어서 상세페이지내용 채움
2. 누가 /detail접속하면 그 컴포넌트 보여줌
react-router-dom 라이브러리 쓰면 쉽게 만들 수 있음.
<BrowserRouter>
  <App />
</BrowserRouter>;
이렇게 <App />을 감싸주면 됨.
import { BrowserRouter } from "react-router-dom";
임포트도 하면댐.

페이지도 컴포넌트로 만들면 좋음
페이지 이동 버튼은 <Link>

폴더구조는 -> 비슷한 파일끼리 폴더로 묶는게 끝

페이지 이동도와주는 useNavigate() -> 이게 훅이래

Link 같은거 만들어서 쓰면 a태그가 만들어진다해서 꼴보기 싫다네
<Link to="/">홈</Link>
<Link to="/detail">상세페이지</Link> 

navigator(1) -> 앞으로 한 페이지 가주세요
navigator(-1) -> 뒤로 한 페이지 가주세요 (뒤로가기)

2. 404 페이지는
'*' 사용 ->         <Route path="*" element={<div>없는페이지예요</div>} />

3. Nested Routes - about페이지
<Route path="/about" element={<About />}>
<Route path="/about/member" element={<About />} />
<Route path="/about/location" element={<About />} />
</Route>
이거나

<Route path="/about" element={<About />}>
  <Route path="member" element={<About />} />                 /about/member
  <Route path="location" element={<About />} />               /about/location
</Route>;
이거나 같은 문법 임.

장점 1) Route 작성이 간단해질 수 있음.
장점 2) nested route 접속시엔 element 2개나 보임
-> /about/member 접속시
<About> & <div>멤버임</div> 둘 다 보인다고 함. -> 바로 보이는것이 아닌 하위 엘리먼트들이 기본엘리먼트 어디 보여줄지 작성해야한다고 함.
Outlet으로 하면 된다네.
nested route의 element 보여주는 곳 <Outlet>

nested routes 언제 쓰냐면
- 여러 페이지 필요할 때
- 여러 유사한 페이지 필요할 때
1. 이런 식으로 UI 만들면 뒤로가기 버튼 이용가능
2. 페이지 이동이 쉬움(UI 스위치 조작 쉬움)

<Route path="/detail/0" element={<Detail shoes={shoes} />} />
<Route path="/detail/1" element={<Detail shoes={shoes} />} />
<Route path="/detail/2" element={<Detail shoes={shoes} />} />
페이지 여러개 만들고 싶을 때 :URL 파라미터 쓰기

<Route path="/detail/0" element={<Detail shoes={shoes} />} />

유저가 URL 파라미터에 입력한거 가져오려면 useParams()
let { id } = useParams();

URL 파라미터에 이상한거 입력하면? -> 이상한거 입력했다고 404 보여주기

상품이 정렬 되었을 경우 -> 상세페이지 이상해짐
detail/0 접속시 0번재 상품 말고 상품 id가 0인 것을 보여주면 될듯.

1. find()는 array 뒤에 붙일 수 있으며 return 조건식 적으면 됩니다. 그럼 조건식에 맞는 자료 남겨줌
2. find() 콜백함수에 파라미터 넣으면 array자료에 있던 자료를 뜻합니다. 전 x라고 작명해봤음
3. x.id == id 라는 조건식을 써봤습니다. 그럼 array자료.id == url에입력한번호 일 경우 결과를 변수에 담아줍니다.
그럼 {상품1개} 이런거 남을듯요 출력해봅시다.
4. 마지막으로 찾은 {상품1개}를 html에 데이터바인딩해놨습니다.

styled-components
백틱으로다가
styled.button`
background: yellow;
color: black;
padding: 10px;
`

styled-components 장점
1. CSS 파일 안열어도 됨.
2. 스타일이 다른 js파일로 오염되지 않음
3. 페이지 로딩시간 단축

styled - components 단점
1. js파일 매우 복잡해짐
2. 중복 스타일은 컴포넌트간 import 하게되는데 CSS와 다를 바가 없다.
3. 협업시 CSS 담당의 숙련도 이슈

사용 예
import styled from "styled-components";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;


컴포넌트의 LifecyCycle
컴포넌트가 
페이지에 장착되기도 하고 (mount)
가끔 업데이트도 되고 (update)
필요없으면 제거되고 (unmount)
이런 인생 주기를 겪음.

왜 배움? -> 알고있으면 중간에 간섭(코드실행) 가능하다고 함.

useEffect임

  useEffect(() => {
    // mount, update시 코드 실행 됨.
  })

useEffect쓰는 이유
useEffect안 코드는 html 렌더링 후에 동작
useEffect 안에 적는 코드들은
- 어려운 연산
- 서버에서 데이터 가져오는 작업
- 타이머 장착하는거


setTimeout(()=>{}, 2000) -> 2초 후에 코드 실행
useEffect 실행조건 넣을 수 있는 곳은 []
컴포넌트 mount시 1회만 실행하고 싶다면 -> []
어떤 값이 바뀔 때마다 사용하고 싶다면 -> [값]
useEffect 동작 전에 실행되는 
return () => {}
-> clean up function -> 기존코드 치우는거 많이 작성한다고 함.
clean up function은 mount시 실행 안 되고, unmount시 실행됨.

useEffect(() => {}) 1. 재렌더링마다 코드 실행하고싶으면
useEffect(() => {}, []) 2. mount시 1회 코드 실행하고 싶다면
useEffect(() => {
    return () => {
        3. unmount시 1회 코드 실행하고싶다면
      }
  }, [])
4. useEffect 실행 전에 뭔가 실행하려면 언제나 return () => {}
5. 특정 state 변경 시에만 실행하려면 [state명]
  */
