import { createSlice } from "@reduxjs/toolkit";
let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increaseCount(state, action) {
      console.log(action);
      let item = state.find((x) => {
        return x.id == action.payload;
      });
      item.count += 1;
    },
    addCart(state, action) {
      console.log(action.payload);
      let alreadyItem = state.find((x) => x.id == action.payload.id);

      if (alreadyItem) {
        alreadyItem.count += 1;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export let { increaseCount, addCart } = cart.actions;

export default cart;
