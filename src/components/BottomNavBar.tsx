import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type NavBtn_Props = {
  title: string;
  style: ViewStyle;
};
const NavBtn = ({title, style}: NavBtn_Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={style} onPress={() => navigation.navigate(title)}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const BottomNavBar = () => {
  const {bottom} = useSafeAreaInsets();
  const styles = StyleSheet.create({
    navigationMenu: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingBottom: bottom,
      backgroundColor: '#436be2',
    },
    navigationBtn: {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#79dbff',
    },
  });

  return (
    <View style={styles.navigationMenu}>
      <NavBtn title={'Goals'} style={styles.navigationBtn} />
      <NavBtn title={'Habits'} style={styles.navigationBtn} />
      <NavBtn title={'To-Do'} style={styles.navigationBtn} />
      <NavBtn title={'Account'} style={styles.navigationBtn} />
    </View>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
