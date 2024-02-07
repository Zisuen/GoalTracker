export type SIGN_UP_USER = {
  userInput: {
    email: string;
    password: string;
    firstname: string;
    birthday: string;
  };
};

export type LOGIN_USER = {
  userInput: {
    email: string;
    password: string;
  };
};

export type AuthenticationStackParams = {
  Login: undefined;
  SignUp: undefined;
};

export type RootStackParams = {
  GoalTracker: undefined;
  Account: undefined;
};

export type SUB_GOAL = {
  sub_goal_id: number;
  sub_goal_title: string;
  sub_goal_description: string;
  sub_goal_progress: number;
  sub_goal_is_done: boolean;
};
export type GOAL = {
  goal_id: string;
  user_id: string;
  created_at: string;
  goal_title: string;
  goal_description: string;
  goal_progress: number;
  subGoals: string;
  is_done: boolean;
};

// Goal types
//  hasSubgoals
// If there are no Sub-Goals => boolean Goal -or- manual Goal
