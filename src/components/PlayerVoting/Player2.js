import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDispatch, useSelector } from 'react-redux';
import { changePlayer2Scores } from '../../features/playerGames/playerGamesSlice';
import DraggableItem from '../DraggableItem/DraggableItem';
import PrevNextButtons from '../PrevNextButtons/PrevNextButtons';
import { changeComponent } from '../../features/componentToShow/componentToShowSlice';
import PlayerNumber from '../Start/PlayerNumber';


const Player2 = () => {
    const dispatch = useDispatch();
    const initialGames = useSelector((state) => state.games);
    const [ games, setGames ] = useState(initialGames);
    


    const onDragEnd = (event) => {
        const { active, over } = event;

        if (active.id === over.id) {
          return;
        }
        setGames((games) => {
          const oldIndex = games.findIndex((game) => game.id === active.id);
          const newIndex = games.findIndex((game) => game.id === over.id);
          return arrayMove(games, oldIndex, newIndex);
        });

        
    };

    const handleClickBack = () => {
      dispatch(changeComponent("player1"))
    }

    const handleClickNext = () => {
      let updateddata = [];
      let arrayLength = games.length;
  
      games.map((item, index) => {
        updateddata.push({
          id: item.id, title: item.title, points: arrayLength - index,
        });
        return updateddata
      });

      dispatch(changePlayer2Scores(updateddata))

      if (PlayerNumber > 2) {
        dispatch(changeComponent("player3"))
      } else {
        dispatch(changeComponent("results"))
      }     
    }  


    return (
    <div>
        <div className="content-container">
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={games} strategy={verticalListSortingStrategy}>
            {games.map((game) => (
              <DraggableItem key={game.id} game={game} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
      <PrevNextButtons handleClickBack={handleClickBack} handleClickNext={handleClickNext} />
    </div>
  )
}

export default Player2;