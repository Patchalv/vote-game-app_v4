import { useSelector, useDispatch } from "react-redux";
import { deleteGame } from "../../features/games/gamesSlice";
import { Card, Button } from "react-bootstrap";

const StartGameList = () => {
    const games = useSelector((state) => state.games.start);
    const dispatch = useDispatch();
    function deleteSelectedGame(id) {
        dispatch(deleteGame(id));
    }
    
    return (
      <div className="add-game-list">
        {games.map((game) => (
                <Card 
                    body
                    className="initial-game" 
                    key={game.id}>
                    {game.title}
                    <Button
                        className="delete-btn"
                        variant="link"
                        onClick={() => deleteSelectedGame(game.id)}
                    >
                        x
                    </Button>
                </Card>
            ))}
      </div>
    );
  };
  
  export default StartGameList;