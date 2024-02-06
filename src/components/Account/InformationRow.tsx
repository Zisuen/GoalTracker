import React, {useContext} from 'react';
import {Switch} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import getFonts from '~/assets/getFonts';
import {ThemeContext} from '~/services/context/ThemeContext';

type PROPS = {
  hasSwitch?: boolean;
  switchValue?: boolean;
  switchFn?: () => void;
  label: string;
};

const InformationRow = ({
  hasSwitch = false,
  switchValue,
  switchFn,
  label,
}: PROPS) => {
  const {theme} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    rootContainer: {
      marginHorizontal: 10,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: theme.text,
    },
    informationContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
    },
    informationLabel: {
      ...getFonts({fontSize: 20}),
      color: theme.text,
    },
  });

  return (
    <View style={styles.rootContainer}>
      <View style={styles.informationContainer}>
        <Text style={styles.informationLabel}>{label}</Text>
        {hasSwitch && <Switch value={!switchValue} onChange={switchFn} />}
      </View>
    </View>
  );
};

export default InformationRow;
