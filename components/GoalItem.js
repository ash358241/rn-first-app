import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({itemData, onDelete, id}) => {
  return (
    <TouchableOpacity activeOpacity='0.8' onPress={onDelete.bind(this, id)}>
      <View style={styles.goalView}>
        <Text style={styles.txt}>{itemData}</Text>
      </View>
    </TouchableOpacity>
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
