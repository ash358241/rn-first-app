import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = ({onAddGoal}) => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText)
      }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="your goal"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    input: {
      borderColor:'black', padding: 10, borderWidth: 2, marginRight: '10px'
    },
  });

export default GoalInput;
