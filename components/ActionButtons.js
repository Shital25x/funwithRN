// components/ActionButtons.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ActionButtons = ({
  showAll,
  showIpl,
  showMax,
  showLoss,
  addRecord,
  deleteRecord,
  updateExpenses,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showAll}>
        <Text style={styles.buttonText}>All Records</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={showIpl}>
        <Text style={styles.buttonText}>IPL Records</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={showMax}>
        <Text style={styles.buttonText}>Max View Record</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={showLoss}>
        <Text style={styles.buttonText}>Loss Records</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={addRecord}>
        <Text style={styles.buttonText}>Add Record</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={deleteRecord}>
        <Text style={styles.buttonText}>Delete 3rd Record</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={updateExpenses}>
        <Text style={styles.buttonText}>Update Expenses</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: '30%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ActionButtons;
