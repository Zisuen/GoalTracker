export type TEST_SUBGOAL = {
  subGoalId: number;
  subGoalTitle: string;
  subGoalProgress: number;
};
export type TEST_GOAL = {
  goalId: number;
  goalTitle: string;
  goalProgress: number;
  subGoals: TEST_SUBGOAL[];
};

export const testGoals: TEST_GOAL[] = [
  {
    goalId: 1,
    goalTitle: 'Have 120000 on my savings',
    goalProgress: 20,
    subGoals: [
      {
        subGoalId: 1,
        subGoalTitle: 'Put 3500 to my savings every month',
        subGoalProgress: 10,
      },
      {
        subGoalId: 2,
        subGoalTitle: 'Not take out money during the month',
        subGoalProgress: 45,
      },
    ],
  },
  {
    goalId: 2,
    goalTitle: 'Get fitter',
    goalProgress: 75,
    subGoals: [
      {
        subGoalId: 1,
        subGoalTitle: 'Exercise with Marta twice a week',
        subGoalProgress: 24,
      },
      {
        subGoalId: 2,
        subGoalTitle: 'Limit sugar to once a week',
        subGoalProgress: 56,
      },
    ],
  },
];
