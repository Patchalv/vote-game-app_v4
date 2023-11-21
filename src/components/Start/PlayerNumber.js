import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";

import { changePlayerNumber } from "../../features/playerNumber/playerNumberSlice";

const PlayerNumber = () => {
    const dispatch = useDispatch();
    const playerNumber = useSelector((state) => state.playerNumber).value;
    const selectRef = useRef(null);
    
    function selectNumberOfPlayers() {
        const playerNum = selectRef.current.value;
        dispatch(changePlayerNumber(Number(playerNum)));
    }
  
    return (
      <div className="add-game">
        {/*<label 
            htmlFor="players-select"
        > 
        Number of Players:
        </label>
        <select 
            name="players" 
            id="player-select" 
            ref={selectRef}
            onChange={selectNumberOfPlayers}
            value={playerNumber}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
          </select>*/}
          <Form.Group controlId="PlayerNum">
            <Form.Label className="player-num-label">Select the number of players:</Form.Label>
            <Form.Select
              className="game-select"
              name="players" 
              id="player-select" 
              ref={selectRef}
              onChange={selectNumberOfPlayers}
              value={playerNumber}
            >
              <option value="1">1 Player</option>
              <option value="2">2 Players</option>
              <option value="3">3 Players</option>
              <option value="4">4 Players</option>
            </Form.Select>
          </Form.Group>

          
          
        
      </div>
    );
  };
  
  export default PlayerNumber;