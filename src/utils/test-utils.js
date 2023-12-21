import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// As a basic setup, import your same slice reducers
import gamesReducer from '../features/games/gamesSlice';
import playerNumberReducer from '../features/playerNumber/playerNumberSlice';
import componentToShowReducer from "../features/componentToShow/componentToShowSlice";
import playerGamesReducer from '../features/playerGames/playerGamesSlice';

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: { 
        games: gamesReducer,
        playerNumber: playerNumberReducer,
        componentToShow: componentToShowReducer,
        playerGames: playerGamesReducer,
    },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
