import React, {useContext, useLayoutEffect, useState} from 'react';
import {Dimensions, Modal, TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import getFonts from '~/assets/getFonts';
import {GOAL, SUB_GOAL} from '~/config/types/api.types';
import {ThemeContext} from '~/services/context/ThemeContext';

type GOAL_DATA = {
  goalTitle: string;
  date: string;
  goalDescription: string;
  goalPercentage: number;
  subGoals: SUB_GOAL[];
};

type PROPS = {
  data: GOAL;
};

const Goal = ({data}: PROPS) => {
  const {theme} = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const [goalData, setGoalData] = useState<any>();

  const styles = StyleSheet.create({
    rootContainer: {
      marginHorizontal: 10,
      marginBottom: 20,
    },
    goalContainer: {
      flex: 1,
      borderRadius: 20,
      backgroundColor: theme.primary,
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    goalTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    goalTitleText: {
      ...getFonts({fontSize: 24}),
      color: theme.text,
      marginLeft: 10,
    },
    goalTitleDate: {
      ...getFonts({fontWeight: 'bold'}),
      color: theme.text,
    },
    goalDescriptionContainer: {
      marginLeft: 5,
      marginBottom: 10,
    },
    goalDescriptionText: {
      ...getFonts({fontSize: 16, fontFamily: 'PTSans-Italic'}),
      color: theme.text,
    },
    goalProgressContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    goalProgressBarContainer: {
      width: Dimensions.get('screen').width - 20 - 20,
      overflow: 'hidden',
      height: 25,
      borderRadius: 20,
      shadowColor: '#000000',
      shadowOpacity: 0.3,
      shadowRadius: 4,
      shadowOffset: {width: 2, height: 2},
      backgroundColor: theme.progressBarBase,
    },
    goalProgressBar: {
      flex: 1,
      backgroundColor: theme.progressBar,
      width: `${goalData?.goalPercentage}%`,
    },
    goalProgressPercentage: {
      ...getFonts({fontSize: 18}),
      color: '#ffffff',
      alignSelf: 'center',
      position: 'absolute',
    },
    subGoalProgressRootContainer: {
      marginLeft: 15,
    },
    subGoalProgressContainer: {
      flexDirection: 'row',
      width: 200,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5,
    },
    subGoalProgressBarContainer: {
      overflow: 'hidden',
      width: 90,
      borderRadius: 20,
      backgroundColor: theme.progressBarBase,
      marginRight: 15,
      justifyContent: 'center',
    },
    subGoalProgressBar: {
      flex: 1,
      backgroundColor: theme.progressBar,
    },
    subGoalProgressPercentage: {
      ...getFonts({fontSize: 13}),
      position: 'absolute',
      alignSelf: 'center',
      color: '#ffffff',
    },
    subGoalTitle: {
      ...getFonts({fontSize: 15}),
      color: theme.text,
    },
  });

  const modalHandler = () => {
    setShowModal(!showModal);
  };

  useLayoutEffect(() => {
    const getGoalType = (type: 'yes/no' | 'manual' | 'sub_goals') => {
      switch (type) {
        case 'sub_goals':
          const oneSub = 100 / (data.sub_goals ? data.sub_goals.length : 1);
          const numberOfDone = data.sub_goals?.filter(
            subGoal => subGoal.sub_goal_is_done,
          ).length;
          if (oneSub && numberOfDone) {
            return oneSub * numberOfDone;
          } else {
            return 1;
          }
        case 'yes/no':
          return 1;
        case 'manual':
          return 1;
        default:
          return 1;
          break;
      }
    };
    const renderGoal: GOAL_DATA = {
      goalTitle: data.goal_title,
      date: data.created_at,
      goalDescription: data.goal_description,
      goalPercentage: getGoalType(data.goal_type),
      subGoals: data.sub_goals
        ? data.sub_goals
        : [
            {
              sub_goal_id: 1,
              sub_goal_title: 'None',
              sub_goal_description: 'N/A',
              sub_goal_is_done: false,
            },
          ],
    };
    setGoalData(renderGoal);
  }, []);

  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity style={styles.goalContainer} onPress={modalHandler}>
        <View style={styles.goalTitleContainer}>
          <Text style={styles.goalTitleText}>Save Money</Text>
          <Text style={styles.goalTitleDate}>Feb 7th 24</Text>
        </View>
        <View style={styles.goalDescriptionContainer}>
          <Text style={styles.goalDescriptionText}>
            "{goalData?.goalDescription}."
          </Text>
        </View>
        <View style={styles.goalProgressContainer}>
          <View style={styles.goalProgressBarContainer}>
            <View style={styles.goalProgressBar} />
            <Text style={styles.goalProgressPercentage}>
              {goalData?.goalPercentage}%
            </Text>
          </View>
        </View>
        <View style={styles.subGoalProgressRootContainer}>
          {goalData?.subGoals.map(goal => {
            return (
              <View
                key={goal.sub_goal_id}
                style={styles.subGoalProgressContainer}>
                <View style={styles.subGoalProgressBarContainer}>
                  <View
                    style={[
                      styles.subGoalProgressBar,
                      {width: `${goal.sub_goal_is_done ? '100' : '5'}%`},
                    ]}
                  />
                  <Text style={styles.subGoalProgressPercentage}>
                    {goal.sub_goal_is_done ? 'Done' : 'In progress'}
                  </Text>
                </View>
                <Text style={styles.subGoalTitle} numberOfLines={1}>
                  {goal.sub_goal_title}
                </Text>
              </View>
            );
          })}
        </View>
      </TouchableOpacity>
      <Modal
        visible={showModal}
        presentationStyle={'pageSheet'}
        animationType={'slide'}>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.primary,
          }}>
          <Text style={{...getFonts({fontSize: 22}), alignSelf: 'center'}}>
            {data.goal_title}
          </Text>
          <TouchableOpacity
            style={{
              width: 25,
              height: 25,
              borderRadius: 13,
              backgroundColor: 'red',
            }}
            onPress={modalHandler}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Goal;
