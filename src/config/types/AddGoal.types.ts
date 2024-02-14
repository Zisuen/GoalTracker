import {SUB_GOAL} from '~/config/types/GoalTracker.types';
type TYPES = 'YES_NO' | 'MANUAL' | 'SUB_GOALS';
type NEW_GOAL_BASE = {
  goal_title: string;
  goal_description: string;
  goal_type: TYPES;
  is_done: boolean;
};
type NEW_GOAL_YES_NO = NEW_GOAL_BASE & {
  goal_type: 'YES_NO';
  goal_target: null;
  goal_current: null;
  sub_goals: [];
  is_done: boolean;
};
type NEW_GOAL_MANUAL = NEW_GOAL_BASE & {
  goal_type: 'MANUAL';
  goal_target: string;
  goal_current: string;
  sub_goals: [];
  is_done: boolean;
};
type NEW_GOAL_SUB_GOALS = NEW_GOAL_BASE & {
  goal_type: 'SUB_GOALS';
  goal_target: null;
  goal_current: null;
  sub_goals: SUB_GOAL[];
  is_done: boolean;
};
type NEW_GOAL = NEW_GOAL_YES_NO | NEW_GOAL_MANUAL | NEW_GOAL_SUB_GOALS;
type INPUT_TARGET =
  | 'goal_title'
  | 'goal_description'
  | 'goal_target'
  | 'goal_current';
type INPUT_HANDLER = {
  text: string;
  target: INPUT_TARGET;
};
type TARGET =
  | 'sub_goal_id'
  | 'sub_goal_title'
  | 'sub_goal_description'
  | 'sub_goal_target'
  | 'sub_goal_current';
type SUB_GOAL_INPUT_HANDLER = {
  text: string;
  arIndex: number;
  target: TARGET;
};

export {
  NEW_GOAL,
  INPUT_TARGET,
  INPUT_HANDLER,
  TYPES,
  TARGET,
  SUB_GOAL_INPUT_HANDLER,
};
