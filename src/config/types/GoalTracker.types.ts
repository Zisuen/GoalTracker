type SUB_GOAL_TYPES = 'MANUAL' | 'YES_NO';
type SUB_GOAL_BASE = {
  sub_goal_id: string;
  sub_goal_type: SUB_GOAL_TYPES;
  sub_goal_title: string;
  sub_goal_description: string;
  sub_goal_is_done: boolean;
};
type SUB_GOAL_YES_NO = SUB_GOAL_BASE & {
  sub_goal_type: 'YES_NO';
  sub_goal_target: null;
  sub_goal_current: null;
};
type SUB_GOAL_MANUAL = SUB_GOAL_BASE & {
  sub_goal_type: 'MANUAL';
  sub_goal_target: number;
  sub_goal_current: number;
};
export type SUB_GOAL = SUB_GOAL_YES_NO | SUB_GOAL_MANUAL;
type GOAL_TYPES = 'SUB_GOAL' | 'YES_NO' | 'MANUAL';
type GOAL_BASE = {
  goal_id: string;
  user_id: string;
  created_at: string;
  goal_type: GOAL_TYPES;
  goal_title: string;
  goal_description: string;
  is_done: boolean;
};
type GOAL_SUB_GOAL = GOAL_BASE & {
  goal_type: 'SUB_GOAL';
  goal_target: null;
  goal_current: null;
  sub_goals: SUB_GOAL[];
};
type GOAL_YES_NO = GOAL_BASE & {
  goal_type: 'YES_NO';
  goal_target: null;
  goal_current: null;
  sub_goals: null;
};
type GOAL_MANUAL = GOAL_BASE & {
  goal_type: 'MANUAL';
  goal_target: number;
  goal_current: number;
  sub_goals: null;
};
type GOAL = GOAL_SUB_GOAL | GOAL_YES_NO | GOAL_MANUAL;

export default GOAL;
