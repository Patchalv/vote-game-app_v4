import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: [],
};
/*
const initialState = {
  start: [{id: 1, title: "7 Wonders", points: 5}, {id: 2, title: "Settlers of Catan", points: 4}, {id: 3, title: "Agricola", points: 3}, {id: 4, title: "Azul", points: 2}, {id: 5, title: "Dice Game", points: 1}],
};
*/


const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    addGame: (state, action) => {
      state.start.push({ id: state.start.length + 1, title: action.payload, points: 0 });
    },
    deleteGame: (state, action) => {
      state.start = state.start.filter((game) => game.id !== action.payload);
    },
  },
});

export const { addGame, deleteGame } = gameSlice.actions;

export default gameSlice.reducer;