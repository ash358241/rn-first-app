import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Hello React Native!')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <br />
      <TextInput placeholder='Goal mamma' style={{borderBottomColor: 'black', borderBottomWidth: 1, outline: 'none'}}/>
      <br />
      <Button title="change text" onPress={() => setOutputText('Welcome to React Native champ!!!')}/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


