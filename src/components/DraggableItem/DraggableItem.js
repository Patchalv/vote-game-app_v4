import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Card from 'react-bootstrap/Card';

const DraggableItem = ({ game }) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
    } = useSortable({ id: game.id });
    const style = {
      transition,
      transform: CSS.Transform.toString(transform),
    };
  
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="user"
      >
        <Card body className="m-3">{game.title}</Card>
      </div>
    );
};

export default DraggableItem;

