import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoal, setCourseGoal] = useState([])

  const addGoalHandler = (goalTitle) => {
    setCourseGoal(currentGoal => [...currentGoal, {id: Math.random().toString(), value: goalTitle}])
  }
 
  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoal => {
      return currentGoal.filter(goal => goal.id !== goalId)
    })
  }

  return (
    <ScrollView>
      <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList data={courseGoal} renderItem={itemData => (
          <GoalItem itemData={itemData.item.value} onDelete={removeGoalHandler} id={itemData.item.id} />
      )} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});


