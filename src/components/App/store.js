import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from '../../features/games/gamesSlice';
import playerNumberReducer from '../../features/playerNumber/playerNumberSlice';
import componentToShowReducer from "../../features/componentToShow/componentToShowSlice";
import playerGamesReducer from '../../features/playerGames/playerGamesSlice';

const store = configureStore({
  reducer: {
    games: gamesReducer,
    playerNumber: playerNumberReducer,
    componentToShow: componentToShowReducer,
    playerGames: playerGamesReducer,
  },
});

export default store;