import { addGame } from "../../features/games/gamesSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Form, InputGroup } from "react-bootstrap";

const StartInput = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  function addNewGame() {
    const game = inputRef.current.value.trim();
    if (game !== "") {
      dispatch(addGame(game));
      inputRef.current.value = "";
    }
  }

  const addNewGameKeyDown = (e) => {
    const game = inputRef.current.value.trim();
    if (e.key === 'Enter' && game !== "") {
      dispatch(addGame(game));
      inputRef.current.value = "";
    }
  }



  
    return (
      <div className="add-game">
        <Form.Label className="player-num-label">Add your list of games:</Form.Label>
        <InputGroup>
            <Form.Control
              className="add-game-input"
              placeholder="Type game here..."
              aria-label="Game Name"
              aria-describedby="basic-addon2"
              ref={inputRef}
              onKeyDown={addNewGameKeyDown}
            />
            <button 
              className="button-dark"
              id="button-addon2"
              onClick={addNewGame}
            >
              Add Game
            </button>
          </InputGroup>

  
      </div>
    );
  };
  
  export default StartInput;