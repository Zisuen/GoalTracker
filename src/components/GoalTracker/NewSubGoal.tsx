import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {SUB_GOAL_INPUT_HANDLER} from '~/config/types/AddGoal.types';
import {ThemeContext} from '~/services/context/ThemeContext';
import {SUB_GOAL, TYPE_HANDLER} from './AddGoalModal';

type PROPS = {
  currentGoalIndex: number;
  getter: SUB_GOAL;
  setter: ({arIndex, text, target}: SUB_GOAL_INPUT_HANDLER) => void;
  type: 'YES_NO' | 'MANUAL';
  typeHandler: ({arIndex, type}: TYPE_HANDLER) => void;
  removeSubGoal: (arIndex: number) => void;
};

const NewSubGoal = ({
  currentGoalIndex,
  getter,
  setter,
  type,
  typeHandler,
  removeSubGoal,
}: PROPS) => {
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
      <TextInput
        value={getter.sub_goal_title}
        placeholder="title"
        onChangeText={text =>
          setter({arIndex: currentGoalIndex, target: 'sub_goal_title', text})
        }
      />
      <TextInput
        value={getter.sub_goal_description}
        placeholder="description"
        onChangeText={text =>
          setter({
            arIndex: currentGoalIndex,
            target: 'sub_goal_description',
            text,
          })
        }
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          onPress={() =>
            typeHandler({arIndex: currentGoalIndex, type: 'YES_NO'})
          }
          style={{
            backgroundColor: '#4291f1',
            opacity: type === 'YES_NO' ? 1 : 0.4,
          }}>
          <Text>YES / NO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            typeHandler({arIndex: currentGoalIndex, type: 'MANUAL'})
          }
          style={{
            backgroundColor: '#4291f1',
            opacity: type === 'MANUAL' ? 1 : 0.4,
          }}>
          <Text>MANUAL</Text>
        </TouchableOpacity>
      </View>
      {getter.sub_goal_type === 'MANUAL' && (
        <>
          <TextInput
            value={getter.sub_goal_target}
            placeholder="subGoaltarget"
            onChangeText={text =>
              setter({
                arIndex: currentGoalIndex,
                target: 'sub_goal_target',
                text,
              })
            }
          />
          <TextInput
            value={getter.sub_goal_current}
            placeholder="subGoalcurrent"
            onChangeText={text =>
              setter({
                arIndex: currentGoalIndex,
                target: 'sub_goal_current',
                text,
              })
            }
          />
        </>
      )}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => removeSubGoal(currentGoalIndex)}
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
