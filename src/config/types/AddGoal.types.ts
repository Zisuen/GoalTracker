type NEW_GOAL_BASE = {
  goal_title: string;
  goal_description: string;
  goal_type: 'YES_NO' | 'MANUAL' | 'SUB_GOALS' | null;
  is_done: boolean;
};
type NEW_GOAL_UNDEFINED = NEW_GOAL_BASE & {
  goal_type: null;
  goal_target: null;
  goal_current: null;
  sub_goals: null;
  is_done: false;
};
type NEW_GOAL_YES_NO = NEW_GOAL_BASE & {
  goal_type: 'YES_NO';
  goal_target: null;
  goal_current: null;
  sub_goals: null;
  is_done: boolean;
};
type NEW_GOAL_MANUAL = NEW_GOAL_BASE & {
  goal_type: 'MANUAL';
  goal_target: string;
  goal_current: string;
  sub_goals: null;
  is_done: boolean;
};
type NEW_GOAL_SUB_GOALS = NEW_GOAL_BASE & {
  goal_type: 'SUB_GOALS';
  goal_target: null;
  goal_current: null;
  sub_goals: number[];
  is_done: boolean;
};
type NEW_GOAL =
  | NEW_GOAL_UNDEFINED
  | NEW_GOAL_YES_NO
  | NEW_GOAL_MANUAL
  | NEW_GOAL_SUB_GOALS;
type INPUT_TARGET =
  | 'goal_title'
  | 'goal_description'
  | 'goal_target'
  | 'goal_current';
type INPUT_HANDLER = {
  text: string;
  target: INPUT_TARGET;
};

export {NEW_GOAL, INPUT_HANDLER};
