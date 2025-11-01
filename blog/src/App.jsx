// /* eslint-disable*/

/* ---------------1 일차 ~ -----------------------*/
// import { useState } from 'react';
// import './App.css'

// function App() {

//   // a : useState안 값과 동일, b : state 변경 도와주는 함수
//   let post = '강남 우동 맛집';

//   let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
//   let [따봉, 따봉변경] = useState([0, 0, 0]);
//   let [modal, setModal] = useState(false);

//   [1, 2, 3].map(function(a){
//     console.log(a)
//   })

//   // return() 안에는 병렬로 태그 2개 이상 기입금지
//   return (
//       <div className="App">
//         <div className="black-nav">
//           <h4>ReactBlog</h4>
//         </div>

//         <button onClick={() =>{
//           let copy = [...글제목]
//           글제목변경(copy.sort())
//         }}>가나다순 정렬</button>

//         <button onClick={ () => {
//             let copy = [...글제목];
//             copy[0] = '여자 코트 추천'
//             글제목변경(copy);
//             }}>제목바뀜버튼!!</button>
// {/*
//         <div className = "list">
//           <h4>{ 글제목[0] }<Comp></Comp> <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
//           <p>2월 17일 발행</p>
//         </div>

//         <div className = "list">
//           <h4>{ 글제목[1] }<Comp></Comp></h4>
//           <p>2월 17일 발행</p>
//         </div>

//         <div className = "list">
//           <h4 onClick={() => { setModal(!modal) }}>{ 글제목[2] }<Comp></Comp></h4>
//           <p>2월 17일 발행</p>
//         </div> */}

//         {
//           글제목.map(function(a, i){ // i(두번째 인자): 반복문 돌 때 마다 0부터 1씩 증가하는 정수
//             return (
//             <div className = "list" key={i}>
//               <h4 onClick={() => { setModal(!modal)}}>{ 글제목[i] }</h4>
//               <span onClick={() => {
//                 let p = [...따봉]
//                 p[i] += 1
//                 따봉변경(p)
//                 }}>👍{따봉[i]}  </span>
//               <p>2월 17일 발행</p>
//             </div>
//             )
//           })
//         }

//         {
//           modal == true ? <Modal/> : null  // html 중간에 조건문 쓰려면 삼항연산자 쓰기
//         }
//       </div>
//   );
// }

// function Modal() {
//   return (
//         <div className='modal'>
//           <h4>제목</h4>
//           <p>날짜</p>
//           <p>상세내용</p>
//         </div>
//   )
// }

// export default App
// /*

// state 쓰면 html은 자동 재렌더링 됨
// 변동시 자동으로 html에 반영되게 만들고 싶으면 state쓰기
// 자주 변경될 것 같은 html 부분은 state로 만들어놓기
// [useState안 값과 동일, state 변경 도와주는 함수]

// state 값 바꿀 때 [...state] 기억하기 -> 화살표를 가져오는 그런...

// 1. onClick 쓰는 법
// onClick={} 안에 함수 넣어야 함.

// 2. state 변경하는 법
// state 변경함수 (새로운 state)

// [state] 변경함수 특징
// 기존 state == 신규 state의 경우 변경 안 해줌

// [array/object 특징]
// array/object 담은 변수에는 화살표만 저장됨

// state가  array/object면 독립적 카피본을 만들어서 수정해야함.

// 컴포넌트 만드는 법
// 1. function 만들고
// 2. return() 안에 html담기
// 3. <함수명></함수명> 쓰기 or <함수명/>

// 언제 컴포넌트를 쓰면 좋은가?
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경되는 것들

// 컴포넌트의 단점
// state 가져다 쓸 때 문제생김 (A 함수에 있던 변수는 B함수에서 맘대로 가져다 쓸 수 없음)

// 동적인 UI 만드는 step
// 1. html css로 미리 디자인 완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성

// 반복문으로 같은 html 반복생성하는 법

// map()
// 1. array 자료 갯수만큼 함수 안의 코드 실행 해줌
// 2. 함수의 파라미터는 array안에 있던 자료임
// 3. return 뭐 적으면 array로 담아줌

// map() 함수
// 1. 왼쪽 array 자료만큼 내부코드 실행해줌
// 2. return 오른쪽에 있는 걸 array로 담아줌
// 3. 유용한 파라미터 2개 사용가능
// */

/* --------- 2일 차~ ---------- */

import { useState } from "react";
import "./App.css";

function App() {
  let post = "강남 우동 맛집";

  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [날짜, 날짜추가] = useState([Date.now(), Date.now(), Date.now()]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  let p = [...따봉];
                  p[i] += 1;
                  따봉변경(p);
                }}
              >
                👍{따봉[i]}{" "}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  let d = [...글제목];
                  d.splice(i, 1);
                  글제목변경(d);
                }}
              >
                삭제
              </button>
            </h4>
            <p>{날짜[i]}</p>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // 글제목 추가
          let p = [...글제목];
          p.unshift(입력값);
          글제목변경(p);
          // 따봉 요소 추가
          let l = [...따봉];
          l.unshift(0);
          따봉변경(l);
          // 날짜 요소 추가
          let d = [...날짜];
          d.unshift(Date.now());
          날짜추가(d);
        }}
      >
        발행
      </button>

      {modal == true ? <Modal 글제목={글제목} title={title} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;

// 부모 -> 자식 state전송하려면 props 문법 쓰면 됨
// 1. <자식 컴포넌트 작명={state이름}> -> 걍 state랑 이름 같게 하자
// 2. props 파라미터 등록 후 props.작명 사용
// props 전송은 부모 -> 자식만 가능

// (정보) 파라미터 문법은 다양한 기능을 하는 함수를 만들 때 사용함  -> props도 파라미터 문법

// state가 Modal, App에서 필요하면 App에다 만들어야 함.
// -> 즉 여러 컴포넌트에 한 state가 필요하다면 가장 상위(가장 부모) 컴포넌트에 만들어야한다는 듰

// <input>에 뭔가 입력시 코드실행하고 싶으면 -> onChange / onInput
// <input>에 입력한 값 가져오는 법
// 이벤트 핸들러에 들어가는 함수에 파라미터 e를 추가할 수 있음.(e 말고 다른 작명 가능)
// e: 이벤트 관련 객체 -> 지금 발생하는 이벤트에 관해 여러 기능이 담겨있음.
// e.target -> 현재 이벤트가 발생한 곳을 알려줌
// e.targe.value -> 현재 타겟의 값

// 이벤트 핸들러 매우 많음
// onClick={}
// onChange={}
// onInput={}
// onMouseOver={}
// onCroll={}

// 클릭 이벤트는 상위 html로 퍼짐(이벤트 버블링)
// 상위 html로 퍼지는 이벤트버블링을 막고싶다면 -> e.stopPropagation()

// 정보 - state변경함수는 늦게 처리됨.
