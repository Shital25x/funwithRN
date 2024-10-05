// components/ProgramCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgramCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.prog_name}</Text>
      <Text>Views: {item.views}</Text>
      <Text>Date Telecast: {item.date_telecast}</Text>
      <Text>Income of Ad: {item.income_of_ad}</Text>
      <Text>Expenses: {item.expenses.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ProgramCard;
