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