import 'react-native-url-polyfill/auto';
import {Alert} from 'react-native';
import {createClient, User} from '@supabase/supabase-js';
import {LOGIN_USER, SIGN_UP_USER} from '~/config/types/api.types';
import {API_KEY, API_URL} from '@env';

export const supabase = createClient(API_URL, API_KEY);

export const TESTING = true;
export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString('default', {month: 'short'});
  const day = dateObj.getDate();
  const daySufix =
    day + (day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th');
  const year = dateObj.getFullYear();
  const formatedDate = `${month} ${daySufix} ${year}`;
  return formatedDate;
};
export const signUpUser = async ({
  userInput,
}: SIGN_UP_USER): Promise<boolean> => {
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
  if (data.user) {
    console.log('User Created: ', data);
    Alert.alert('User has been created');
    return true;
  }
  if (error) {
    console.log('Error while creating account', error);
    Alert.alert(error.message);
    return false;
  }
  return false;
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
