// // ! step 1:_ configure store
// import { configureStore, createReducer,createAction } from "@reduxjs/toolkit";

// // ! step 3 :- create reducer

// interface StartType {
//   count: number;
// }

// // create action
// const increment=createAction("increment");
// const decrement=createAction("decrement");

// const initialState: StartType = {
//   count: 0,
// };
// const rootReducer = createReducer(initialState, (builder) => {
//     // reducer fuction
//   builder.addCase(increment, (state) => {
//     state.count += 1;
//   });
//   builder.addCase(decrement, (state) => {
//     state.count -= 1;
//   });
// });
// export const store = configureStore({ reducer: rootReducer });

// !--------------------------------------------------------------xxxx------------------------------------------------------------------

// ! USING CREATE SLICE
// ! step 1:_ configure store
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// ! step 3 :- create reducer

export interface StartType {
  count: number;
}

const initialState: StartType = {
  count: 0,
};

const rootSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = rootSlice.actions;

export const store = configureStore({ reducer: rootSlice.reducer });
