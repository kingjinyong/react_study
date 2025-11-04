import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail({ shoes }) {
  let [visible, setVisible] = useState(true);
  let [count, setCount] = useState(0);
  let [num, setNum] = useState("");
  let [tab, setTab] = useState(0);

  useEffect(() => {
    let a = setTimeout(() => {
      setVisible(false);
    }, 2000);
    console.log(2);
    return () => {
      console.log(1);
      clearTimeout(a);
    };
  });

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("숫자만 입력하세요.");
    }
  }, [num]);

  let { id } = useParams();
  // let findItem = props.shoes.find((x) => x.id == id);
  let findItem = shoes.find(function (x) {
    return x.id == id;
  });
  return (
    <Container>
      {visible ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <Row>
        <Col>
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          ></input>
        </Col>
        <Col>
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </Col>
      </Row>

      <Nav justify variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTab(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTab(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTab(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* {tab == 0 ? <div>내용0</div> : null}
      {tab == 1 ? <div>내용1</div> : null}
      {tab == 2 ? <div>내용2</div> : null} 
      이렇게 말고 일반 if 조건문 쓰려면?
      */}

      <TabContent tab={tab}></TabContent>
    </Container>
  );
}

function TabContent({ tab }) {
  // if (tab == 0) {
  //   return <div>내용0</div>;
  // }
  // if (tab == 1) {
  //   return <div>내용1</div>;
  // }
  // if (tab == 2) {
  //   return <div>내용2</div>;
  // }
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab];
}

export default Detail;
