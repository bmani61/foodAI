import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
function GoalItem(props) {
  function deleteGoalHandler() {
    props.deleteHandler(props.item.id);
  }

  return (
    <Pressable onPress={deleteGoalHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.item.text}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
  },
  goalText: {
    color: 'white',
  },
});
export default GoalItem;
