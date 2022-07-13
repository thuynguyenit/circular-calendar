export enum MONTHS {
    Jan = 'Jan', 
    Feb = 'Feb', 
    Mar = 'Mar',
    Apr = 'Apr',
    May = 'May',
    Jun = 'Jun',
    Jul = 'Jul',
    Aug = 'Aug',
    Sep = 'Sep',
    Oct = 'Oct',
    Nov = 'Nov',
    Dec = 'Dec'
};

export type GlobalContent = {
    goals: Goal[],
    setGoals: (goals: Goal[]) => void,
    selectedGoalIndex: number,
    setSelectedGoalIndex: (goalIndex: number) => void
}

export type Goal = {
    id: string;
    note: string;
};

export type DraggableListItemProps = {
    item: Goal;
    index: number;
};