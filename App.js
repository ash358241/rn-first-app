import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoal, setCourseGoal] = useState([])

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    console.log(enteredGoal)
    setCourseGoal(currentGoal => [...currentGoal, {id: Math.random().toString(), value: enteredGoal}])
  }
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='your goal' onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>
      <FlatList data={courseGoal} renderItem={itemData => (
          <View style={styles.goalView}><Text style={styles.txt}>{itemData.item.value}</Text></View>
      )} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  }, 
  input: {
    borderColor:'black', padding: 10, borderWidth: 2, marginRight: '10px'
  },
  goalView: {
    border: '2px solid black',
    backgroundColor: 'lightgrey', 
    padding: 10,
    marginVertical: 10, 
    width: '25%',
    color: 'white'
  },
  txt: {
    fontWeight: 700,
    textTransform: 'capitalize'
  }
});


