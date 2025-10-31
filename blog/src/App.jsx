/* eslint-disable*/

import { useState } from 'react';
import './App.css'

function App() {

  // a : useState안 값과 동일, b : state 변경 도와주는 함수  
  let post = '강남 우동 맛집'; 

  // state 쓰면 html은 자동 재렌더링 됨
  // 변동시 자동으로 html에 반영되게 만들고 싶으면 state쓰기
  // 자주 변경될 것 같은 html 부분은 state로 만들어놓기
  // [useState안 값과 동일, state 변경 도와주는 함수]  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);

  // return() 안에는 병렬로 태그 2개 이상 기입금지
  return (      
      <div className="App">
        <div className="black-nav">
          <h4>ReactBlog</h4>
        </div>

        <button onClick={() =>{
          let copy = [...글제목]
          글제목변경(copy.sort())
        }}>가나다순 정렬</button>

        <button onClick={ () => {
            let copy = [...글제목];
            copy[0] = '여자 코트 추천'
            글제목변경(copy);
            }}>제목바뀜버튼!!</button>
        
        <div className = "list">
          <h4>{글제목[0]}<Comp></Comp> <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
          <p>2월 17일 발행</p>
        </div>

        <div className = "list">
          <h4>{글제목[1]}<Comp></Comp></h4> 
          <p>2월 17일 발행</p>
        </div>
        
        <div className = "list">
          <h4>{글제목[2]}<Comp></Comp></h4>
          <p>2월 17일 발행</p>
        </div>
        <Modal/>
      </div>
  );
}

function Modal() {
  return (
        <div className='modal'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
  )
}


function Comp(){
  return (
    <button>
      🥺
    </button>
  )
}

export default App
/*

오늘 배운거

1. onClick 쓰는 법
onClick={} 안에 함수 넣어야 함. 

2. state 변경하는 법
state 변경함수 (새로운 state) 
            
[state] 변경함수 특징
기존 state == 신규 state의 경우 변경 안 해줌

[array/object 특징]
array/object 담은 변수에는 화살표만 저장됨

state가  array/object면 독립적 카피본을 만들어서 수정해야함.

컴포넌트 만드는 법
1. function 만들고
2. return() 안에 html담기
3. <함수명></함수명> 쓰기 or <함수명/>

언제 컴포넌트를 쓰면 좋은가?
1. 반복적인 html 축약할 때
2. 큰 페이지들
3. 자주 변경되는 것들

컴포넌트의 단점
state 가져다 쓸 때 문제생김 (A 함수에 있던 변수는 B함수에서 맘대로 가져다 쓸 수 없음)
*/