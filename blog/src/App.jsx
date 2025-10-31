import { useState } from 'react';
import './App.css'

function App() {
  
  let post = '강남 우동 맛집'; 
  // a : useState안 값과 동일, b : state 변경 도와주는 함수
  let [글제목, b] = useState('남자 코트 추천');
  // state 쓰면 html은 자동 재렌더링 됨
  // 변동시 자동으로 html에 반영되게 만들고 싶으면 state쓰기
  return (      // return() 안에는 병렬로 태그 2개 이상 기입금지
      <div className="App">
        <div className="black-nav">
          <h4>블로그임</h4>
        </div>
        <div className = "list">
          <h4>{글제목}</h4>
          <p>2월 17일 발행</p>
        </div>
      </div>
  )
}

export default App
