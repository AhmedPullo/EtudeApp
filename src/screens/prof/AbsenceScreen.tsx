/*import { View, Text,StyleSheet,ScrollView  } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'; 


export default function AbsenceScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

       

          <Text style={styles.label}>Selectionnew la classe</Text>

      <Picker></Picker>

      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Add more styles here
});
*/



import React, { useState } from 'react';
import { View, Text, FlatList, Button, Switch, StyleSheet,  ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

const AttendanceScreen = () => {
  // Sample class and student data
  const [classes, setClasses] = useState([
    { id: '1', name: 'Class 1' },
    { id: '2', name: 'Class 2' },
    { id: '3', name: 'Class 3' },
  ]);

  const [studentsByClass, setStudentsByClass] = useState({
    '1': [
      { id: '1', name: 'John Doe', present: false },
      { id: '2', name: 'Jane Smith', present: false },
      { id: '1', name: 'John Doe', present: false },
      { id: '3', name: 'Jane Smith', present: false },
      { id: '4', name: 'John Doe', present: false },
      { id: '5', name: 'Jane Smith', present: false },
      { id: '6', name: 'John Doe', present: false },
      { id: '7', name: 'Jane Smith', present: false },
      { id: '8', name: 'John Doe', present: false },
      { id: '9', name: 'Jane Smith', present: false },
      { id: '10', name: 'John Doe', present: false },
      { id: '20', name: 'Jane Smith', present: false },
      { id: '100', name: 'John Doe', present: false },
      { id: '23', name: 'Jane Smith', present: false },
      { id: '13', name: 'John Doe', present: false },
      { id: '22', name: 'Jane Smith', present: false },
      { id: '12', name: 'John Doe', present: false },
      { id: '21', name: 'Jane Smith', present: false },
    ],
    '2': [
      { id: '3', name: 'Sam Brown', present: false },
      { id: '4', name: 'Lisa White', present: false },
    ],
    '3': [
      { id: '5', name: 'Mark Black', present: false },
      { id: '6', name: 'Emily Green', present: false },
    ],
  });

  const [selectedClass, setSelectedClass] = useState('');
  const [students, setStudents] = useState([]);

  // Handle class selection
  const handleClassSelection = (classId: string) => {
    setSelectedClass(classId);
    setStudents(studentsByClass[classId] || []);
  };

  // Toggle attendance status for a student
  const toggleAttendance = (id: string) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  // Submit attendance
  const submitAttendance = () => {
    console.log('Attendance Submitted for Class', selectedClass, ':', students);
  };

  const renderStudent = ({ item }) => (
    <View style={styles.studentRow}>
      <Text style={styles.studentName}>{item.name}</Text>
      <Switch
        value={item.present}
        onValueChange={() => toggleAttendance(item.id)}
      />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Select Class</Text>
        <Picker
          selectedValue={selectedClass}
          style={styles.picker}
          onValueChange={(itemValue) => handleClassSelection(itemValue)}
        >
          <Picker.Item label="Choose a class" value="" />
          {classes.map((classe) => (
            <Picker.Item key={classe.id} label={classe.name} value={classe.id} />
          ))}
        </Picker>

        {selectedClass ? (
          <>
            <Text style={styles.title}>Attendance for Class {selectedClass}</Text>
            <FlatList
              data={students}
              renderItem={renderStudent}
              keyExtractor={(item) => item.id}
            />
            <Button title="Submit Attendance" onPress={submitAttendance} />
          </>
        ) : (
          <Text style={styles.noClassSelected}>Please select a class</Text>
        )}
      </View>
    </ScrollView>
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
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  studentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  studentName: {
    fontSize: 18,
  },
  noClassSelected: {
    fontSize: 18,
    color: 'red',
    marginTop: 20,
  },
});

export default AttendanceScreen;
