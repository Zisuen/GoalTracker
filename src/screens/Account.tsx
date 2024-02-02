import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {logoutUser} from '~/services/api';
import {logout} from '~/services/redux/loginSlice';

const Account = () => {
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    const isLogedOut = await logoutUser();
    if (isLogedOut) {
      dispatch(logout());
    }
  };

  return (
    <View style={styles.container}>
      <Text>Account</Text>
      <TouchableOpacity
        onPress={() => logoutHandler()}
        style={{
          backgroundColor: '#ef76b7',
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#000000',
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
