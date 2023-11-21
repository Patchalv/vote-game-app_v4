import { useSelector } from "react-redux";

import Header from "../Header/Header";
import Start from "../Start/Start";
import Player1 from "../PlayerVoting/Player1";
import Player2 from "../PlayerVoting/Player2";
import Player3 from "../PlayerVoting/Player3";
import Player4 from "../PlayerVoting/Player4";
import Results from "../Results/Results";

const App = () => {
  const compToShow = useSelector((state) => state.componentToShow.stage);


  return (
    <div className="app-container">
      <Header />
      {compToShow === "start" ? (<Start />) : null }
      {compToShow === "player1" ? (<Player1 />) : null }
      {compToShow === "player2" ? (<Player2 />) : null }
      {compToShow === "player3" ? (<Player3 />) : null }
      {compToShow === "player4" ? (<Player4 />) : null }
      {compToShow === "results" ? (<Results />) : null }
    </div>
  )
}

export default App;

/*[
            {
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
            }
        ]*/
