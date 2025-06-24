import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Welcome({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('Story'), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to QuantNet by</Text>
      <Text style={styles.text}> Ali Noor</Text>
    </View>
  );
}

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
