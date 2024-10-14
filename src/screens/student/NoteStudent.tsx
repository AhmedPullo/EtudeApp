import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ResultsScreen = () => {
  // Sample results data
  const [results] = useState([
    { id: '1', subject: 'Mathematics', type : 'exam' ,grade: '18' },
    { id: '2', subject: 'Science', type : 'DS' , grade: '17' },
    // Add more results as needed
  ]);

  const renderResultItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.subject}</Text>
      <Text style={styles.cell}>{item.grade}</Text>
      <Text style={styles.cell}>{item.type}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Results</Text>
      <FlatList
        data={results}
        renderItem={renderResultItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ResultsScreen;
