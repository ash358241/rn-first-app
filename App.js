import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Hello React Native!')
  return (
    <View style={styles.container}>
      <View style={styles.viewOne}>
        <Text>1</Text>
      </View>

      <View style={styles.viewTwo}>
        <Text>2</Text>
      </View>

      <View style={styles.viewThree}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  viewOne: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    // flex: 1
  },
  viewTwo: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
    // flex: 3
  },
  viewThree: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  }
});


