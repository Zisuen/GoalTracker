import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomNavBar from './BottomNavBar';

type Layout_Props = {
  children: ReactNode;
};

const Layout = ({children}: Layout_Props) => {
  const {top} = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: top,
    },
    contentContainer: {
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>{children}</View>
      <BottomNavBar />
    </View>
  );
};

export default Layout;
