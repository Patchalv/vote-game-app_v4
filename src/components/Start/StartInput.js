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
  
    return (
      <div className="add-game">
        {/*<input
          type="text"
          placeholder="Add game here..."
          ref={inputRef}
          className="add-game-input"
        />
        <button 
            className="add-game-button"
            onClick={addNewGame}>
                Add Game
        </button>*/}

        <InputGroup>
            <Form.Control
              className="add-game-input"
              placeholder="Type game here..."
              aria-label="Game Name"
              aria-describedby="basic-addon2"
              ref={inputRef}
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