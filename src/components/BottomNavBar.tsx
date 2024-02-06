import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ThemeContext} from '~/services/context/ThemeContext';
import {RootStackParams} from '~/config/types/api.types';
import stylesBottomNavBar from '~/config/styles/components/BottomNavBar.styles';
import {CURRENT_SCREEN} from './Layout';

type PROPS = {
  navigation: NavigationProp<RootStackParams>;
  currentScreen: CURRENT_SCREEN;
};

const BottomNavBar = ({navigation, currentScreen}: PROPS) => {
  const {theme} = useContext(ThemeContext);
  const styles = stylesBottomNavBar();

  return (
    <View style={styles.bottomNavBar}>
      <TouchableOpacity
        style={styles.navBarBtn}
        onPress={() => navigation.navigate('GoalTracker')}>
        <MCIcon
          name="bullseye-arrow"
          color={currentScreen === 'Goals' ? theme.text : theme.inactive}
          size={32}
        />
        <Text
          style={[
            styles.navBarBtnLabel,
            {
              color: currentScreen === 'Goals' ? theme.text : theme.inactive,
            },
          ]}>
          Goals
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBarBtn}
        onPress={() => navigation.navigate('Account')}>
        <MCIcon
          name="account-circle"
          color={currentScreen === 'Account' ? theme.text : theme.inactive}
          size={32}
        />
        <Text
          style={[
            styles.navBarBtnLabel,
            {color: currentScreen === 'Account' ? theme.text : theme.inactive},
          ]}>
          Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavBar;
