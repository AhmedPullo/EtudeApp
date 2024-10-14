import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const AttendanceViewScreen = ({ route }) => {
  const { studentName } = route.params;

  // Sample attendance data
  const [attendanceRecords] = useState([
    { id: '1', date: '2024-09-01', course : 'Math' , time : '10-12h', present: false },
    { id: '2', date: '2024-09-02', course : 'PC' , time : '08-12h', present: false },
    { id: '3', date: '2024-09-03',course : 'PULAAR' , time : '08-10h', present: false },
    // Add more records as needed
  ]);

  const renderAttendanceItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.course}</Text>
      <Text style={styles.cell}>{item.time}</Text>
      <Text style={styles.cell}>{item.present ? 'Present' : 'Absent'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance Record for {studentName}</Text>
      <FlatList
        data={attendanceRecords}
        renderItem={renderAttendanceItem}
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

export default AttendanceViewScreen;
