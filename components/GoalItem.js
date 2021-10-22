import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = ({itemData}) => {
  return (
    <div>
      <View style={styles.goalView}>
        <Text style={styles.txt}>{itemData}</Text>
      </View>
    </div>
  );
};

const styles = StyleSheet.create({
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

export default GoalItem;
