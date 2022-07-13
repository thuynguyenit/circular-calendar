import { useState } from 'react';
import { useGlobalContext } from '../GlobalContext';
import { TextField, Button } from '@mui/material';

const GoalField = () => {
    const [note, setNote] = useState('');
    const {goals, setGoals, selectedGoalIndex} = useGlobalContext();

    const setGoalNote = () => {
        const newGoals = Array.from(goals);
        newGoals[selectedGoalIndex].note = note;

        setGoals(newGoals);
        setNote('');
    };

    return <>
        <TextField 
            id="goal-field"
            className='goal-field'
            label="Your Goal"
            variant="outlined"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            size="small"
        />
        <Button 
            variant="contained"
            onClick={setGoalNote}
        >Add</Button>
    </>;
};

export default GoalField;