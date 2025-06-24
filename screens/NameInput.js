import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function NameInput({ navigation }) {
  const [name, setName] = useState('');

  const handleContinue = () => {
    if (name.trim() !== '') {
      navigation.navigate('ModelSelect', { name });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>What’s your name?</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder='Enter your name'
        placeholderTextColor="#aaa"
      />
      <Button title="Continue" onPress={handleContinue} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 24,
    fontStyle: 'italic',
    marginBottom: 10,
    fontFamily: 'Cochin',
  },
  input: {
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
});

