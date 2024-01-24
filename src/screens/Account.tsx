import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import Layout from '../components/Layout';
import {logout} from '../redux/user';
import supabase from '../service/api';

const Account = () => {
  const dispatch = useDispatch();

  const signOutHandler = async () => {
    const {error} = await supabase.auth.signOut();
    if (error) {
      console.log(error);
      return;
    }
    dispatch(logout());
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    button: {
      position: 'absolute',
      bottom: 20,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      borderRadius: 10,
      backgroundColor: '#5b0606',
    },
    buttonTitle: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '700',
      padding: 10,
    },
  });

  return (
    <Layout>
      <View style={styles.container}>
        <Text>Account Screen</Text>
        <TouchableOpacity style={styles.button} onPress={signOutHandler}>
          <Text style={styles.buttonTitle}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default Account;
