import * as React from "react";
import DraggableListItem from "./DraggableListItem";
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder
} from "react-beautiful-dnd";
import { Goal } from "../types";

const DraggableList = React.memo(({ items, onDragEnd }: {
    items: Goal[];
    onDragEnd: OnDragEndResponder;
}) => <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="droppable-list">
        {(provided) => <ul 
            ref={provided.innerRef} {...provided.droppableProps} 
            className="goals-list"
        >
            {items.map((item, index) => <DraggableListItem item={item} index={index} key={item.id} />)}
            {provided.placeholder}
        </ul>}
    </Droppable>
</DragDropContext>);

export default DraggableList;
