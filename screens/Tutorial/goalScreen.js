import * as React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

import GoalInput from '../../components/Tutorial/goalInput';
import GoalItem from '../../components/Tutorial/goalItem';

function GoalScreen() {
  const [courseGoals, setCourseGoals] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setShowModal(false);
  }
  function modalHandler() {
    setShowModal(true);
  }
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add new Goal" onPress={modalHandler} />
      <GoalInput onAddGoal={addGoalHandler} modalStatus={showModal} />
      <View style={styles.listGoals}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <GoalItem
                item={itemData.item}
                deleteHandler={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  listGoals: {
    flex: 4,
  },
});

export default GoalScreen;
