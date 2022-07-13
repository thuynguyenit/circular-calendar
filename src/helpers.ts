import { MONTHS, Goal } from "./types";

export const reorder = <T>(
  list: T[],
  startIndex: number,
  endIndex: number
): T[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  
  return result;
};

export const getDefaultGoalsList = (): Goal[] => {
  const goals: Goal[] = [];
  const months = Object.values(MONTHS);

  months.forEach((month: MONTHS) => goals.push({
    id: month,
    note: ''
  } as Goal));

  return goals;
}

export const getMonthByIndex = (index: number): MONTHS => Object.values(MONTHS)?.[index] ?? '[unknown]';
