import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MadeGoal() {
  return (
    <View>
      <Text style={styles.madeGoalText}>Goal is Done</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  madeGoalText: {
    color: 'green',
    fontSize: 20,
  },
});
