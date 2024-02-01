import React, {useLayoutEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/Layout';
import GoalModal from '../components/Goals/GoalModal';
import Goal from '../components/Goals/Goal';
import {fetchGoals, GOAL, SUB_GOAL} from '../service/api';

const Goals = () => {
  const [showModal, setShowModal] = useState(false);
  const [chosenGoal, setChosenGoal] = useState<SUB_GOAL[]>([]);
  const [data, setData] = useState<GOAL[]>();
  const modalHandler = () => {
    setShowModal(!showModal);
  };
  const chooseGoal = (goal: SUB_GOAL[]) => {
    setShowModal(true);
    setChosenGoal(goal);
  };

  useLayoutEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchGoals();
      if (fetchedData) {
        setData(fetchedData);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Layout>
        <FlatList
          data={data}
          renderItem={({item}) => <Goal item={item} choosenGoal={chooseGoal} />}
        />
      </Layout>
      {chosenGoal && (
        <GoalModal
          showModal={showModal}
          handleModal={modalHandler}
          goal={chosenGoal}
        />
      )}
    </>
  );
};

export default Goals;
