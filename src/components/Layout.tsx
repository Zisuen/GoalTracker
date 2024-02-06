import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import stylesLayout from '~/config/styles/components/Layout.styles';
import {RootStackParams} from '~/config/types/api.types';
import BottomNavBar from './BottomNavBar';

export type CURRENT_SCREEN = 'Account' | 'Goals';

type PROPS = {
  children: ReactNode;
  navigation: NavigationProp<RootStackParams>;
  currentScreen: CURRENT_SCREEN;
  topPadding?: boolean;
};

const Layout = ({
  children,
  navigation,
  currentScreen,
  topPadding = false,
}: PROPS) => {
  const styles = stylesLayout({topPadding});

  return (
    <View style={styles.rootContainer}>
      <View style={styles.contentContainer}>{children}</View>
      <BottomNavBar navigation={navigation} currentScreen={currentScreen} />
    </View>
  );
};

export default Layout;
