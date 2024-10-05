import React from 'react';
import MissedGoal from './MissedGoal';
import MadeGoal from './MadeGoal';
import { View } from 'react-native';

export default function Goal({ isGoal }) {
  return (
    <View>
      {isGoal ? <MadeGoal /> : <MissedGoal />}
    </View>
  );
}
