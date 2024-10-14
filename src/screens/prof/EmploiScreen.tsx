import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

const TimetableScreen = () => {
  // Sample timetable data
  const [timetable] = useState([
    { id: '1', day: 'Monday', subject: 'Mathematics', time: '9:00 AM - 10:00 AM' , room: 'class1' },
    { id: '2', day: 'Monday', subject: 'Science', time: '10:15 AM - 11:15 AM' ,room: 'class1'},
    { id: '3', day: 'Tuesday', subject: 'English', time: '9:00 AM - 10:00 AM' ,room: 'class7'},
    { id: '4', day: 'Tuesday', subject: 'History', time: '10:15 AM - 11:15 AM' ,room: 'class5'},
    { id: '5', day: 'Wednesday', subject: 'Geography', time: '9:00 AM - 10:00 AM',room: 'class3' },
    { id: '6', day: 'Wednesday', subject: 'Physical Education', time: '10:15 AM - 11:15 AM',room: 'class2' },
    // Add more subjects as needed
  ]);

  const renderTimetableItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.day}</Text>
      <Text style={styles.cell}>{item.subject}</Text>
      <Text style={styles.cell}>{item.time}</Text>
      <Text style={styles.cell}>{item.room}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Teacher's Timetable</Text>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Day</Text>
          <Text style={styles.headerCell}>Subject</Text>
          <Text style={styles.headerCell}>Time</Text>
        </View>
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    marginBottom: 10,
  },
  headerCell: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
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

export default TimetableScreen;
