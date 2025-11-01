import { useState } from "react";
import "./App.css";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
// import bg from "./assets/bg.png";
import data from "./data.js";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Like</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>

      <Container>
        <Row>
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
        </Row>
      </Container>
    </div>
  );
}

function Item(props) {
  return (
    <Col>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.image + ".jpg"}
        width="80%"
      />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </Col>
  );
}

export default App;
// 이미지 넣는 법
// 1. css 파일에서는 그냥 ./이미지 경로
// ex) .main-bg {
//      height: 300px;
//   /* background-image: url("./assets/bg.png"); */
//      background-size: cover;
//      background-position: center;
//    }
//        이런 식으로

// 2. html 안에서 이미지 집어 넣고 싶으면
// import 작명 from './이미지경로' 한 다음에
// 이미지 경로가 필요한 곳 에서 작명한 것 사용
// <img> 태그 쓰고싶으면 <img src={bg}/> 이런 식으로 쓰기

// html에서 public 폴더 이미지 사용할 때는 그냥 -> /이미지경로
// 주의점: codding.com에 발행하면 문제 없는데
//        codding.com/어쩌구/에 발행 시 문제.
//        그럴 경우
//        -> {process.env.PUBLIC_URL + '/이미지경로'} 로 작성

// 다른 파일에 있던 변수 가져오려면
// 1. 변수를 export 하고
// 2. import 하면 끝

// export 하려면
// export default 변수명;
// import 하려면
// import 작명 from '파일경로'

// export 여러개 하려면
// export {변수1, 변수2}

// 함수도 export 가능
