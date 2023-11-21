import { useSelector } from "react-redux";

const Header = () => {
  const compToShow = useSelector((state) => state.componentToShow.stage);
  
    return (
      <header className="app-header">
        {compToShow === "start" ? (<h1>Vote to Play!</h1>) : null }   
        {compToShow === "player1" ? (<h1>Player 1</h1>) : null }   
        {compToShow === "player2" ? (<h1>Player 2</h1>) : null }   
        {compToShow === "player3" ? (<h1>Player 3</h1>) : null }   
        {compToShow === "player4" ? (<h1>Player 4</h1>) : null }      
        {compToShow === "results" ? (<h1>Results</h1>) : null }   
  
      </header>
    );
  };
  
  export default Header;