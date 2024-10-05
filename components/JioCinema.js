// components/JioCinema.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import ActionButtons from './ActionButtons';
import ProgramCard from './ProgramCard';

const JioCinema = () => {
  const [data, setData] = useState([
    { id: 1, views: 15000, prog_name: 'Movie A', date_telecast: '2024-09-01', income_of_ad: 5000, expenses: 3000 },
    { id: 2, views: 22000, prog_name: 'IPL 2024 Match 1', date_telecast: '2024-04-05', income_of_ad: 12000, expenses: 4000 },
    { id: 3, views: 18000, prog_name: 'Drama Series B', date_telecast: '2024-08-15', income_of_ad: 8000, expenses: 2000 },
    { id: 4, views: 50000, prog_name: 'IPL 2024 Final', date_telecast: '2024-05-29', income_of_ad: 20000, expenses: 7000 },
  ]);

  const originalData = [
    { id: 1, views: 15000, prog_name: 'Movie A', date_telecast: '2024-09-01', income_of_ad: 5000, expenses: 3000 },
    { id: 2, views: 22000, prog_name: 'IPL 2024 Match 1', date_telecast: '2024-04-05', income_of_ad: 12000, expenses: 4000 },
    { id: 3, views: 18000, prog_name: 'Drama Series B', date_telecast: '2024-08-15', income_of_ad: 8000, expenses: 2000 },
    { id: 4, views: 50000, prog_name: 'IPL 2024 Final', date_telecast: '2024-05-29', income_of_ad: 20000, expenses: 7000 },
  ];

  const filterIplRecords = () => {
    const filteredData = originalData.filter((record) => record.prog_name.toLowerCase().includes('ipl'));
    setData(filteredData);
  };

  const resetData = () => setData(originalData);

  const addNewRecord = () => {
    const newRecord = {
      id: data.length + 1,
      views: 10000,
      prog_name: 'Comedy Show',
      date_telecast: '2024-07-01',
      income_of_ad: 3000,
      expenses: 1500,
    };
    setData([...data, newRecord]);
  };

  const deleteThirdRecord = () => setData(data.filter((record) => record.id !== 3));

  const updateExpenses = () => {
    const updatedData = data.map((record) => ({
      ...record,
      expenses: record.expenses * 1.1, // Increase expenses by 10%
    }));
    setData(updatedData);
  };

  const showLossRecords = () => {
    const lossRecords = data.filter((record) => record.expenses > record.income_of_ad);
    setData(lossRecords);
  };

  const showMaxViewRecord = () => {
    const maxRecord = data.reduce((max, record) => (record.views > max.views ? record : max), data[0]);
    Alert.alert('Max Views Record', `${maxRecord.prog_name} with ${maxRecord.views} views.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>JioCinema Records</Text>
      <ActionButtons
        showAll={resetData}
        showIpl={filterIplRecords}
        showMax={showMaxViewRecord}
        showLoss={showLossRecords}
        addRecord={addNewRecord}
        deleteRecord={deleteThirdRecord}
        updateExpenses={updateExpenses}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProgramCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default JioCinema;
