import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

const StudentTimetableScreen = () => {
  // Sample timetable data
  const [timetable] = useState([
    { id: '1', day: 'Monday', subject: 'Mathematics', time: '9:00 AM - 10:00 AM' },
    { id: '2', day: 'Monday', subject: 'Science', time: '10:15 AM - 11:15 AM' },
    // Add more subjects as needed
  ]);

  const renderTimetableItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.day}</Text>
      <Text style={styles.cell}>{item.subject}</Text>
      <Text style={styles.cell}>{item.time}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Timetable</Text>
        <FlatList
          data={timetable}
          renderItem={renderTimetableItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
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

export default StudentTimetableScreen;
