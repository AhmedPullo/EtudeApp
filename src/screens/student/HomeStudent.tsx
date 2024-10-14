import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import HeaderSection from './HeaderSection';
import TimetableComponent from './TimetableComponent';
import DayDetailsComponent from './DayDetailsComponent';
import BottomNavigation from './BottomNavigation';



const HomeStudent = ({route}) => {

  const { name: teacherName } = route.params;


  const daySessions = [
    { id: 1, subject: 'Eng', teacher: teacherName , time: '8:30 - 9:55' },
    { id: 2, subject: 'Tec', teacher: 'Jane Smith', time: '10:00 - 11:25' },
    // Add more session data
  ];
  return (
    <SafeAreaView style={styles.container}>
      <HeaderSection />
      <TimetableComponent />
      <DayDetailsComponent daySessions={daySessions} />
      <BottomNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
});

export default HomeStudent;
