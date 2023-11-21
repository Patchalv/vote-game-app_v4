import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    addGame: (state, action) => {
      state.push({ id: state.length + 1, title: action.payload, points: 0 });
    },
    deleteGame: (state, action) => {
      state = state.filter((game) => game.id !== action.payload);
    },
  },
});

export const { addGame, deleteGame } = gameSlice.actions;

export default gameSlice.reducer;