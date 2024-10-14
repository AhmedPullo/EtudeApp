import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // Make sure to install react-native-vector-icons
import { useNavigation } from '@react-navigation/native';


const BottomNavigation = () => {
  const navigation = useNavigation(); // Get the navigation object
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconButton} 
      onPress = {() =>navigation.navigate('TimeTableStudent')} >
        <Icon name="facebook" size={28} color="white" />
        <Text style={styles.iconLabel}>Timetable</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}
        onPress = {()=> navigation.navigate('AbscenceStudent' , {studentName : 'Ahmed Ba'})}
      >

        <Icon name="facebook" size={28} color="white" />
        <Text style={styles.iconLabel}>Attendance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}
      onPress = {()=> navigation.navigate('NoteStudent')}>
        <Icon name="document-text" size={28} color="white" />
        <Text style={styles.iconLabel}>Grades</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="notifications-outline" size={28} color="white" />
        <Text style={styles.iconLabel}>Notifications</Text>
      </TouchableOpacity>
    </View>


  );
};

const styles = StyleSheet.create({
  footer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 15, 
    backgroundColor: '#003f5c', 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20 
  },
  iconButton: { alignItems: 'center' },
  iconLabel: { color: 'white', marginTop: 5 }
});

export default BottomNavigation;
