import React from 'react';
import PlayerNumber from './PlayerNumber';
import StartInput from './StartInput';
import StartGameList from './StartGameList';
import { changeComponent } from '../../features/componentToShow/componentToShowSlice';
import { useDispatch, useSelector } from 'react-redux';
import PrevNextButtons from '../PrevNextButtons/PrevNextButtons';

function Start() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);


  const handleClickNext = () => {
    if (games.length > 1) {
      dispatch(changeComponent("player1"))
    } 
  }  

  return (
    <div>
      <div className="content-container">
        <PlayerNumber />
        <StartInput />
        <StartGameList /> 
       
      </div>
      <PrevNextButtons handleClickNext={handleClickNext} />
    </div>
  )
}

export default Start;