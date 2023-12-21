import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import Start from "../Start/Start";
import { useSelector } from "react-redux";
import playerNumberSlice from "../../features/playerNumber/playerNumberSlice";

describe("Start component load correct", () => {

  test("renders input labels", () => {
    renderWithProviders(<Start />);
    const playerSelectLabelText = screen.getByText(/Select the number of players/i);
    const gameInputLabelText = screen.getByText(/Add your list of games/i);
    expect(playerSelectLabelText).toBeInTheDocument();
    expect(gameInputLabelText).toBeInTheDocument();
  });

  test("renders Add Game and Player 1 buttons", () => {
    renderWithProviders(<Start />);
    const addGameButtonText = screen.getByText(/Add Game/i);
    const player1ButtonText = screen.getByText(/Player 1/i);
    expect(addGameButtonText).toBeInTheDocument();
    expect(player1ButtonText).toBeInTheDocument();
  });
});

describe("Input working properly", () => {

    test("Input shows initial state on render", () => {
        renderWithProviders(<Start />);
        const initialPlayerNumber = playerNumberSlice(initialState: { value: 3 });
        
        const playerSelectText = screen.screen.getByText(/3 Players/i);
        expect(playerSelectText).toBeInTheDocument();
    });
  
    
  });