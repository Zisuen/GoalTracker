import 'react-native-url-polyfill/auto';
import {createClient, User} from '@supabase/supabase-js';
import {LOGIN_USER, SIGN_UP_USER} from '~/config/types/api.types';

const supabaseUrl = 'https://tmolyqslvghkivdbfpqu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtb2x5cXNsdmdoa2l2ZGJmcHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1Mzk0ODUsImV4cCI6MjAxNTExNTQ4NX0.KQyjrq4YrfiEVUpsRTAb08dCZDT459twIXfEoSalu5s';

const supabase = createClient(supabaseUrl, supabaseKey);

export const signUpUser = async ({userInput}: SIGN_UP_USER) => {
  const {email, password, firstname, birthday} = userInput;
  const {data, error} = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstname,
        birthday,
      },
    },
  });
  if (data) {
    console.log('User Created: ', data);
  }
  if (error) {
    console.log('Error while creating account', error);
  }
};

export const loginUser = async ({
  userInput,
}: LOGIN_USER): Promise<User | undefined> => {
  const {email, password} = userInput;
  const {data, error} = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (data.user) {
    console.log(data);
    return data.user;
  }
  if (error) {
    console.log('Error Loging in', error);
    return undefined;
  }
};

export const logoutUser = async (): Promise<boolean> => {
  const {error} = await supabase.auth.signOut();
  if (error) {
    console.log('Error while signing out');
    return false;
  }
  console.log('User logged out');
  return true;
};
