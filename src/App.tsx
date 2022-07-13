import React, { useState } from 'react';
import './App.css';
import GoalField from './components/GoalField';
import { GlobalContext, } from './GlobalContext';
import DraggableList from './components/DraggableList';
import { reorder } from './helpers';
import { DropResult } from 'react-beautiful-dnd';
import { makeStyles } from "@mui/styles";
import { Paper } from "@mui/material";
import { Goal } from './types';
import { getDefaultGoalsList } from './helpers';

const useStyles = makeStyles({
  flexPaper: {
    flex: 1,
    margin: 16,
    minWidth: 350,
    boxShadow: 'none !important'
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  }
});


const App = () => {
  const classes = useStyles();
  const [goals, setGoals] = useState<Goal[]>(getDefaultGoalsList());
  const [selectedGoalIndex, setSelectedGoalIndex] = useState<number>(0);

  const onDragEnd = ({ destination, source }: DropResult) => {
    // dropped outside the list
    if (!destination) return;

    const newGoals = reorder(goals, source.index, destination.index);

    setGoals(newGoals);
    setSelectedGoalIndex(destination.index);
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={{ goals, setGoals, selectedGoalIndex, setSelectedGoalIndex }}>
          <GoalField />
          <div className={classes.root}>
            <Paper className={classes.flexPaper}>
              <DraggableList items={goals} onDragEnd={onDragEnd} />
            </Paper>
          </div>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
