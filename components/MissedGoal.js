import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MissedGoal() {
  return (
    <View>
      <Text style={styles.missedGoalText}>Goal is Missed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  missedGoalText: {
    color: 'red',
    fontSize: 20,
  },
});
