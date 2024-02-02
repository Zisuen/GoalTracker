import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';
import {LOGIN_USER} from '~/config/types/api.types';

const supabaseUrl = 'https://tmolyqslvghkivdbfpqu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtb2x5cXNsdmdoa2l2ZGJmcHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1Mzk0ODUsImV4cCI6MjAxNTExNTQ4NX0.KQyjrq4YrfiEVUpsRTAb08dCZDT459twIXfEoSalu5s';

const supabase = createClient(supabaseUrl, supabaseKey);

export const loginUser = async ({email, password}: LOGIN_USER) => {
  const {data, error} = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (data.user) {
    console.log(data);
  }
  if (error) {
    console.log('Error Loging in', error);
  }
};
