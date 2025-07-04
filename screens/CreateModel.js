import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Dummy file options for the dropdown
const dummyFiles = [
  { label: 'celebs.pdf', value: 'celebs.pdf' },
  { label: 'faces.jpg', value: 'faces.jpg' },
  { label: 'audio.mp3', value: 'audio.mp3' },
  { label: 'sample.png', value: 'sample.png' },
];

// Screen for creating a new model
export default function CreateModel({ navigation }) {
  // State for form fields
  const [modelName, setModelName] = useState('');
  const [labelOne, setLabelOne] = useState('');
  const [labelTwo, setLabelTwo] = useState('');
  const [selectedFile, setSelectedFile] = useState(dummyFiles[0].value);

  // Handle "Train and Create" button press
  const handleCreate = () => {
    // Validate all fields
    if (!modelName || !labelOne || !labelTwo || !selectedFile) {
      Alert.alert('Please fill all fields');
      return;
    }
    // Pass new model info back to ModelSelect via navigation params
    navigation.navigate('ModelSelect', {
      newModel: {
        id: modelName.toLowerCase().replace(/\s+/g, '-'),
        name: modelName,
        labels: [labelOne, labelTwo],
        file: selectedFile,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a New Model</Text>
      {/* Model name input */}
      <TextInput
        style={styles.input}
        placeholder="Name your model"
        placeholderTextColor="#888"
        value={modelName}
        onChangeText={setModelName}
      />
      {/* Label 1 input */}
      <TextInput
        style={styles.input}
        placeholder="Label 1"
        placeholderTextColor="#888"
        value={labelOne}
        onChangeText={setLabelOne}
      />
      {/* Label 2 input */}
      <TextInput
        style={styles.input}
        placeholder="Label 2"
        placeholderTextColor="#888"
        value={labelTwo}
        onChangeText={setLabelTwo}
      />
      {/* File picker */}
      <Text style={styles.label}>Select a file:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedFile}
          onValueChange={setSelectedFile}
          style={styles.picker}
        >
          {dummyFiles.map((file) => (
            <Picker.Item key={file.value} label={file.label} value={file.value} />
          ))}
        </Picker>
      </View>
      {/* Train and Create button */}
      <TouchableOpacity style={styles.createButton} onPress={handleCreate}>
        <Text style={styles.createButtonText}>Train and Create</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles for CreateModel screen
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', padding: 24 },
  header: { fontSize: 24, color: '#fff', marginBottom: 24, fontWeight: 'bold' },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  label: { color: '#fff', marginBottom: 8, fontSize: 16 },
  pickerContainer: {
    backgroundColor: '#222',
    borderRadius: 8,
    marginBottom: 24,
    overflow: 'hidden',
  },
  picker: { color: '#fff', height: 50 },
  createButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  createButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});