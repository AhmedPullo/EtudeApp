import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderSection = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.studentName}>AHMED BA</Text>
      <Text style={styles.details}>Student • ISITCOM • 3DNI2</Text>
      <Text style={styles.reminder}>Don't forget your homework. Rings in: 14 hours</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { padding: 20, backgroundColor: '#003f5c' },
  studentName: { fontSize: 24, color: 'white', fontWeight: 'bold' },
  details: { color: 'lightgray', fontSize: 16, marginTop: 5 },
  reminder: { color: 'lightgray', fontSize: 14, marginTop: 10 }
});

export default HeaderSection;
