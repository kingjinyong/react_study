import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail({ shoes }) {
  let [visible, setVisible] = useState(true);
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(false);
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

  useEffect(() => {});

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
          {alert ? (
            <div className="alert alert-warning">숫자만 입력하세요.</div>
          ) : null}
          <input
            onChange={(e) => {
              if (isNaN(e.target.value)) setAlert(true);
              else setAlert(false);
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
    </Container>
  );
}

export default Detail;
