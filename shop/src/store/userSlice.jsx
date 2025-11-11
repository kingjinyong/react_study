import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  // useStaet() 역할과 비슷
  name: "user",
  initialState: { name: "kim", age: 20 }, // state 하나를 slice라고 부름
  reducers: {
    changeName(state) {
      state.name = "park";
    },
    // 함수 이어서 작성 가능
    increase(state, action) {
      state.age += action.payload; // payload는 뭐 화물 이라는 뜻이라네
    },
  },
});

export let { changeName, increase } = user.actions;

export default user;
