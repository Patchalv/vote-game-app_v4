import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 2,
};

const playerNumberSlice = createSlice({
  name: "playerNumber",
  initialState,
  reducers: {
    changePlayerNumber: (state, action) => {
        state.value = action.payload;
    },
  },
});

export const { changePlayerNumber } = playerNumberSlice.actions;

export default playerNumberSlice.reducer;