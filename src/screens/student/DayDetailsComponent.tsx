import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const DayDetailsComponent = ({ daySessions }) => {
  return (
    <FlatList
      data={daySessions}  // Replace with your session data
      renderItem={({ item }) => (
        <View style={styles.daySession}>
          <Text style={styles.subject}>{item.subject}</Text>
          <Text style={styles.teacher}>Teacher: {item.teacher}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  daySession: { 
    padding: 15, 
    backgroundColor: '#f4f4f4', 
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd',
    marginVertical: 5 
  },
  subject: { fontSize: 18, fontWeight: 'bold', color: '#003f5c' },
  teacher: { fontSize: 16, color: '#333' },
  time: { fontSize: 14, color: 'gray' }
});

export default DayDetailsComponent;
