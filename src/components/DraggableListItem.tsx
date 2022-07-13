import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@mui/styles";
import { useGlobalContext } from "../GlobalContext";
import { DraggableListItemProps } from "../types";
import { getMonthByIndex } from "../helpers";


const useStyles = makeStyles({
    draggingListItem: {
        backgroundColor: "rgb(235,235,235)"
    },
    selectedItem: {
        background: "#e5e1e1"
    }
});
  
const DraggableListItem = ({ item, index }: DraggableListItemProps) => {
    const classes = useStyles();
    const {selectedGoalIndex, setSelectedGoalIndex} = useGlobalContext();
    const isSelectedGoal = selectedGoalIndex === index;
    const month = getMonthByIndex(index);
    const cssTransform = `rotate(${index * 30}deg) skewY(-60deg)`;

    return <li 
        className={"goal-item" + " " + (isSelectedGoal ? classes.selectedItem : "")}
        style={{
            transform: cssTransform,
            WebkitTransform: cssTransform,
            msTransform: cssTransform
        }}
    >
        <div className="text">
            <Draggable draggableId={item.id} index={index}>
                {(provided, snapshot) => <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`draggable-item ${snapshot.isDragging ? classes.draggingListItem : ""}`}
                    onClick={() => setSelectedGoalIndex(index)}
                >
                    <div className="goal-note">{item.note}</div>
                </div>}
            </Draggable>
            <div className="month-name">{month}</div>
        </div>
    </li>;
};

export default DraggableListItem;