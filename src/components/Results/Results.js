import { useDispatch, useSelector } from "react-redux";
import { useState, } from "react";
import PlayerNumber from "../Start/PlayerNumber";
import { changeComponent } from '../../features/componentToShow/componentToShowSlice';
import PrevNextButtons from "../PrevNextButtons/PrevNextButtons";

const Results = () => {
  const dispatch = useDispatch();
  const initialGames = useSelector((state) => state.games);
  const player1games = useSelector((state) => state.playerGames.player1);
  const player2games = useSelector((state) => state.playerGames.player2);
  const player3games = useSelector((state) => state.playerGames.player3);
  const player4games = useSelector((state) => state.playerGames.player4);
  const [ total, setTotal ] = useState(initialGames);
  const [ showResults, setShowResults ] = useState(false);

  function calculateTotalScore() {
    let result;

    const sumObjectsByKey = (sumFn, ...arrs) => Array.from(
      arrs.flat() // combine the arrays
      .reduce((m, o) => // retuce the combined arrays to a Map
        m.set(o.id,  // if add the item to the Map
          m.has(o.id) ? sumFn(m.get(o.id, o.title), o) : { ...o } // if the item exists in Map, sum the current item with the one in the Map. If not, add a clone of the current item to the Map
        )
      , new Map()).values()
    )
    
    // utility function to sum to object values (without the id)
    const sumItem = ({ id, title, ...a }, b) => ({
      id,
      title,
      ...Object.keys(a)
        .reduce((r, k) => ({ ...r, [k]: a[k] + b[k] }), {})
    });
    
    if ( PlayerNumber === 2) {
      result = sumObjectsByKey(sumItem, player1games, player2games)
    } else if ( PlayerNumber === 3) {
      result = sumObjectsByKey(sumItem, player1games, player2games, player3games)
    } else {
      result = sumObjectsByKey(sumItem, player1games, player2games, player3games, player4games)
    }
         
    console.log(result)
    
    function compare( a, b ) {
      if ( a.points < b.points ){
        return +1;
      }
      if ( a.points > b.points ){
        return -1;
      }
      return 0;
    };

    result.sort( compare ); 

    setTotal(result);
    setShowResults(true);
  };

  const handleClickBack = () => {
    if (PlayerNumber < 3) {
      dispatch(changeComponent("player2"))
      setShowResults(false)
    } else if (PlayerNumber < 4) {
      dispatch(changeComponent("player3"))
      setShowResults(false) 
    } else {
      dispatch(changeComponent("player4"))
      setShowResults(false)
    }
    //dispatch(changeComponent("player3"))
    //setShowResults(false)
  }
 
    return (
      <div >
        <div className="content-container resultBox">
          <h3>AND THE GAME WE'RE GOING TO PLAY IS.....</h3>
          { showResults === false ? (<button className="button-dark results-button" variant="secondary" size="lg" onClick={calculateTotalScore}>Calculate</button> ): null }
            { showResults ? (
            <div className="hidden-results">
            <ul>
              {total.map((totGame) => (
                 <li key={totGame.id}><span className="result-item">{totGame.title}</span>:  {totGame.points} pts</li>
                ))}
              </ul>
            </div>
            ): null }
        </div>
        <PrevNextButtons handleClickBack={handleClickBack} />

      </div>
    );
  };
  
  export default Results;