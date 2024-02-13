import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {ThemeContext} from '~/services/context/ThemeContext';

type PROPS = {};

const NewSubGoal = ({}: PROPS) => {
  const {theme} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    subgoal_container: {
      backgroundColor: theme.secondary,
      marginHorizontal: 25,
      padding: 10,
      borderRadius: 15,
      marginBottom: 10,
    },
  });
  return (
    <View style={styles.subgoal_container}>
      <Text>NewSubGoal</Text>
      <Text>{'id: 1234'}</Text>
      <TextInput placeholder="title" onChangeText={() => {}} />
      <TextInput placeholder="description" />
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity>
          <Text>YES / NO</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>MANUAL</Text>
        </TouchableOpacity>
      </View>
      <TextInput placeholder="is_done" />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: 'green',
          }}
        />
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: 'red',
          }}
        />
      </View>
    </View>
  );
};

export default NewSubGoal;
