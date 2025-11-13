import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addCart } from "../store/cartSlice";
import { useQueryClient } from "@tanstack/react-query";
import { useLike } from "../hooks/likes";
import axios from "axios";
import { useGetName } from "../hooks/getName";
// state 사용은 1. Context를 import

function Detail({ shoes }) {
  let q = useQueryClient();
  let result = q.getQueryData(["getName"]);
  console.log(result);

  let [visible, setVisible] = useState(true);
  let [count, setCount] = useState(0);
  let [num, setNum] = useState("");
  let [tab, setTab] = useState(0);

  let [fade, setFade] = useState("");

  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  let navigate = useNavigate();

  useEffect(() => {
    // fade라는 state를 end로 바꿔주세요

    setFade("end");
    return () => {
      setFade("");
    };
    // state가 변할 때 end 뗐다가 부착
  }, []); // tab이라는게 변경될 때 마다 안의 코드 실행해줌

  useEffect(() => {
    let a = setTimeout(() => {
      setVisible(false);
    }, 2000);
    // console.log(2);
    return () => {
      // console.log(1);
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

  useEffect(() => {
    console.log(findItem.id);
    let watched = JSON.parse(localStorage.getItem("watched"));
    watched = watched.filter((watchedId) => watchedId != findItem.id);
    watched.unshift(findItem.id);
    localStorage.setItem("watched", JSON.stringify(watched));
  });

  let { like, addLike } = useLike();
  let { name } = useGetName();

  return (
    <Container className={`start ${fade}`}>
      <div>{name}</div>
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
      {/* {재고[0]} */}
      <Row>
        <Col>
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              findItem.id + 1
            }.jpg`}
            width="100%"
          />
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          ></input>
        </Col>
        <Col>
          {like}
          <span
            onClick={() => {
              addLike();
            }}
          >
            ♥️
          </span>
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(
                addCart({ id: findItem.id, name: findItem.title, count: 1 })
              );

              // console.log(state.cart);
            }}
          >
            주문하기
          </button>
          <button
            className="btn bg-white"
            onClick={() => {
              navigate("/cart");
            }}
          >
            장바구니 이동
          </button>
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
  let [fade, setFade] = useState("");

  useEffect(() => {
    // fade라는 state를 end로 바꿔주세요
    let a = setTimeout(() => {
      setFade("end");
    }, 10);
    return () => {
      clearTimeout(a);
      setFade("");
    };
    // state가 변할 때 end 뗐다가 부착
  }, [tab]); // tab이라는게 변경될 때 마다 안의 코드 실행해줌

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}

export default Detail;
