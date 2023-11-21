import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { DraggableItem } from '../DraggableItem/DraggableItem';

function DragggableColumn() {

    const [ items, setItems ] = useState(
        [
            {
                id: 1,
                title: "7 Wonders",
                points: 0,
            },
            {
                id: 2,
                title: "Settlers of Catan",
                points: 0,
            },
            {
                id: 3,
                title: "Agricola",
                points: 0,
            },
            {
                id: 4,
                title: "Azul",
                points: 0,
            },
            {
                id: 5,
                title: "Dice Game",
                points: 0,
            }
        ]
    );

    const handleDragEnd = () => (event) => { 
    
        const { active, over } = event;
    
        if (active.id !== over.id) {

            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                const newItems = arrayMove(items, oldIndex, newIndex);
        
                return newItems;                    
            });            
        }       
    };

  return (
    <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
    >      
      <SortableContext
        items={items}
        strategy={verticalListSortingStrategy}
      >
        {items.map((item, indx) => (
          <DraggableItem key={indx} id={item.id} title={item.title} />
        ))}
      </SortableContext>
  </DndContext>
  )
}

export default DragggableColumn