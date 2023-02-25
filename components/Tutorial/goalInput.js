import * as React from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';
function GoalInput(props) {
  const [goalInput, setGoalInput] = React.useState('');
  function goalInputHandler(enteredText) {
    setGoalInput(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(goalInput);
    setGoalInput('');
  }

  return (
    <Modal visible={props.modalStatus}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}
          placeholder="your goals"
          onChangeText={goalInputHandler}
          value={goalInput}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flex: 1,
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
export default GoalInput;
