import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Welcome screen shown at app start
export default function Welcome({ navigation }) {
  useEffect(() => {
    // Automatically navigate to Story screen after 4 seconds
    const timer = setTimeout(() => navigation.replace('Story'), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* App title and author */}
      <Text style={styles.text}>Welcome to QuantNet by</Text>
      <Text style={styles.text}> Ali Noor</Text>
    </View>
  );
}

// Styles for Welcome screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontStyle: 'italic',
    fontFamily: 'Cochin',
  },
});
