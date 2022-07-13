import { createContext, useContext } from "react";
import { GlobalContent, Goal } from "./types";


export const GlobalContext = createContext<GlobalContent>({
    goals: [],
    setGoals: (goals: Goal[]) => {},
    selectedGoalIndex: 0,
    setSelectedGoalIndex: (goalIndex: number) => {}
})

export const useGlobalContext = () => useContext(GlobalContext)