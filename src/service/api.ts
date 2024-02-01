import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';

export type SUB_GOAL = {
  is_done: boolean;
  subGoal_title: string;
  subGoal_progress: number;
};

export type GOAL = {
  id: number;
  created_at: string;
  goal_title: string;
  goal_description: string;
  is_done: boolean;
  goal_progress: number;
  subGoals: SUB_GOAL[];
};

const supabaseUrl = 'https://tmolyqslvghkivdbfpqu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtb2x5cXNsdmdoa2l2ZGJmcHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1Mzk0ODUsImV4cCI6MjAxNTExNTQ4NX0.KQyjrq4YrfiEVUpsRTAb08dCZDT459twIXfEoSalu5s';
const supabase = createClient(supabaseUrl, supabaseKey);

type SIGN_IN_PROPS = {
  email: string;
  password: string;
};

export const signIn = async ({email, password}: SIGN_IN_PROPS) => {
  const {data, error} = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (data.user !== null) {
    console.log(data);
    return true;
  }
  if (error) {
    console.log(`Error => ${error}`);
    return false;
  }
  return false;
};

export const fetchGoals = async (): Promise<GOAL[]> => {
  const {data, error} = await supabase.from('goals').select('*');
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export default supabase;
