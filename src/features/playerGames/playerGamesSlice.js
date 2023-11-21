import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    player1: [],
    player2: [],
    player3: [],
    player4: [],
    /*player1: [{
        id: 1,
        title: "7 Wonders",
        points: 5,
    },
    {
        id: 2,
        title: "Settlers of Catan",
        points: 4,
    },
    {
        id: 3,
        title: "Agricola",
        points: 3,
    },
    {
        id: 4,
        title: "Azul",
        points: 2,
    },
    {
        id: 5,
        title: "Dice Game",
        points: 1,
    }],
    player2: [{
        id: 1,
        title: "7 Wonders",
        points: 5,
    },
    {
        id: 2,
        title: "Settlers of Catan",
        points: 4,
    },
    {
        id: 3,
        title: "Agricola",
        points: 3,
    },
    {
        id: 4,
        title: "Azul",
        points: 2,
    },
    {
        id: 5,
        title: "Dice Game",
        points: 1,
    }],
    player3: [{
        id: 1,
        title: "7 Wonders",
        points: 5,
    },
    {
        id: 2,
        title: "Settlers of Catan",
        points: 4,
    },
    {
        id: 3,
        title: "Agricola",
        points: 3,
    },
    {
        id: 4,
        title: "Azul",
        points: 2,
    },
    {
        id: 5,
        title: "Dice Game",
        points: 1,
    }],
    player4: [{
        id: 1,
        title: "7 Wonders",
        points: 5,
    },
    {
        id: 2,
        title: "Settlers of Catan",
        points: 4,
    },
    {
        id: 3,
        title: "Agricola",
        points: 3,
    },
    {
        id: 4,
        title: "Azul",
        points: 2,
    },
    {
        id: 5,
        title: "Dice Game",
        points: 1,
    }]*/
};

const playerGamesSlice = createSlice({
  name: "playerGames",
  initialState,
  reducers: {
    changePlayer1Scores: (state, action) => {
        state.player1 = action.payload;
    },
    changePlayer2Scores: (state, action) => {
        state.player2 = action.payload;
    },
    changePlayer3Scores: (state, action) => {
        state.player3 = action.payload;
    },
    changePlayer4Scores: (state, action) => {
        state.player4 = action.payload;
    },
  },
});

export const { changePlayer1Scores, changePlayer2Scores, changePlayer3Scores, changePlayer4Scores } = playerGamesSlice.actions;

export default playerGamesSlice.reducer;