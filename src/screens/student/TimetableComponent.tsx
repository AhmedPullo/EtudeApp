import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const TimetableComponent = () => {
  return (
    <ScrollView horizontal={true} style={styles.timetable}>
      <View style={styles.session}>
        <Text style={styles.subject}>Eng</Text>
        <Text style={styles.time}>8:30 - 9:55</Text>
      </View>
      <View style={styles.session}>
        <Text style={styles.subject}>Tec</Text>
        <Text style={styles.time}>10:00 - 11:25</Text>
      </View>
      {/* Add more sessions as per the day */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  timetable: { flexDirection: 'row', padding: 10, marginTop: 20 },
  session: { 
    backgroundColor: '#465881', 
    padding: 15, 
    borderRadius: 8, 
    marginRight: 10, 
    width: 100, 
    alignItems: 'center' 
  },
  subject: { color: 'white', fontSize: 18 },
  time: { color: 'lightgray', fontSize: 14 }
});

export default TimetableComponent;
