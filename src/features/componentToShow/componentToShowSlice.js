import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stage: "start"
}

const componentToShowSlice = createSlice({
  name: "componentToShow",
  initialState,
  reducers: {
    changeComponent: (state, action) => {
      state.stage = action.payload;
    },
  },
});

export const { changeComponent } = componentToShowSlice.actions;

export default componentToShowSlice.reducer;