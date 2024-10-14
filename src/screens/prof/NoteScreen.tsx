import { Button , View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import React, { useState } from 'react';
//import { Button } from '../../../node_modules/react-native/types/index';

interface Eleve {
  id: number;
  nom: string;
  note: number;
}

const donne: Eleve[] = [
  { id: 1, nom: "Ahmed", note: 20 },
  { id: 2, nom: "Penda", note: 20 },
  { id: 3, nom: "Ous", note: 19 },
  { id: 4, nom: "Kali", note: 19 },
  { id: 5, nom: "Ubuntu", note: 15 },
  { id: 6, nom: "Khadija", note: 20 },
  { id: 7, nom: "Ahmed", note: 20 },
  { id: 8, nom: "Penda", note: 20 },
  { id: 9, nom: "Ous", note: 19 },
  { id: 10, nom: "Kali", note: 19 },
  { id: 11, nom: "Ubuntu", note: 15 },
  { id: 12, nom: "Khadija", note: 20 }
];

export default function NoteScreen() {
  const [selectedValue, setSelectedValue] = useState('1er');
  const [notes, setNotes] = useState(donne);

  const handleNoteChange = (id: number, newNote: string) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, note: Number(newNote) } : note
      )
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Sélectionnez le devoir ou l'examen à rendre:</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="1er" value="1er" />
          <Picker.Item label="2ème" value="2ème" />
          <Picker.Item label="3ème" value="3ème" />
          <Picker.Item label="4ème" value="4ème" />
        </Picker>

        <Text style={styles.header}>NoteScreen</Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.cellHeader}>Nom et prénom</Text>
            <Text style={styles.cellHeader}>Numéro</Text>
            <Text style={styles.cellHeader}>Note</Text>
          </View>

          {notes.map((row) => (
            <View key={row.id} style={styles.row}>
              <Text style={styles.cell}>{row.nom}</Text>
              <Text style={styles.cell}>{row.id}</Text>
              <TextInput
                style={styles.inputCell}
                keyboardType="numeric"
                value={row.note.toString()}
                onChangeText={(newNote) => handleNoteChange(row.id, newNote)}
              />
            </View>
          ))}
        </View>
      </View>
      <Button title = "Enregistrer" onPress={() => console.log("AHMED")}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  picker: {
    marginBottom: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
  },
  row: {
    flexDirection: 'row',
  },
  cellHeader: {
    flex: 1,
    padding: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#ddd',
  },
  cell: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  inputCell: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
});
