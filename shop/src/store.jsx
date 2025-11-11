import { configureStore } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import cart from "./store/cartSlice";
// 오른쪽 자료를 변수로 빼는 문법

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
