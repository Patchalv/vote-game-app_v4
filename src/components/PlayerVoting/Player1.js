import React, { useState } from 'react';
import { DndContext, closestCenter, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { useDispatch, useSelector } from 'react-redux';
import { changePlayer1Scores } from '../../features/playerGames/playerGamesSlice';
import DraggableItem from '../DraggableItem/DraggableItem';
import PrevNextButtons from '../PrevNextButtons/PrevNextButtons';
import { changeComponent } from '../../features/componentToShow/componentToShowSlice';

const Player1 = () => {
    const mouseSensor = useSensor(MouseSensor);
    const touchSensor = useSensor(TouchSensor);
    const keyboardSensor = useSensor(KeyboardSensor);

    const sensors = useSensors(
        mouseSensor,
        touchSensor,
        keyboardSensor
    );

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
        dispatch(changeComponent("start"))
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

        dispatch(changeComponent("player2"))
        dispatch(changePlayer1Scores(updateddata))
    }  

    return (
    <div>
        <div className="content-container">
        
        <DndContext 
            collisionDetection={closestCenter} 
            onDragEnd={onDragEnd}
            sensors={sensors}
            modifiers={[restrictToVerticalAxis]}
        >

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

export default Player1;