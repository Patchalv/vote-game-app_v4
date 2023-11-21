import { useSelector } from "react-redux";

const PrevNextButtons = ({handleClickBack, handleClickNext}) => {
    const compToShow = useSelector((state) => state.componentToShow.stage);
    const playerNumber = useSelector((state) => state.playerNumber).value;
  
    let backBtnText = "< Start";
    let nextBtnText = "Player 1 >"
    
    switch (compToShow) {
        case "start":
            backBtnText = "< Start"
            nextBtnText = "Player 1 >"
            break;
        case "player1":
            backBtnText = "< Start";
            if (playerNumber > 1) {
                nextBtnText = "Player 2 >"
            } else {
                nextBtnText = "Results >"
            }
            break;
        case "player2":
            backBtnText = "< Player 1";
            if (playerNumber > 2) {
                nextBtnText = "Player 3 >"
            } else {
                nextBtnText = "Results >"
            }
            break;
        case "player3":
            backBtnText = "< Player 2";
            if (playerNumber > 3) {
                nextBtnText = "Player 4 >"
            } else {
                nextBtnText = "Results >"
            }
            break;
        case "player4":
            backBtnText = "< Player 3"
            nextBtnText = "Results >"
            break;
        default:
            backBtnText = "< Previous"
            nextBtnText = "Next >"
            break;
    }

    return (
    <div className="button-container">
        <div className="button-container-inner">
        {compToShow !== "start" ? (<button className="button-dark" onClick={handleClickBack}>{backBtnText}</button>) : null }   
        </div>
        <div className="button-container-inner">
        {compToShow !== "results" ? (<button className="button-dark" onClick={handleClickNext}>{nextBtnText}</button>) : null }   
        </div>
    </div>

    );
};

export default PrevNextButtons;