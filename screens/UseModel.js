// screens/UseModel.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import CelebrityImage from '../components/CelebrityImage';
import { SafeAreaView } from 'react-navigation'; 

const celebrities = [
  { id: 'ronaldo', name: 'Ronaldo', image: require('../assets/ronaldo.jpg') },
  { id: 'messi', name: 'Messi', image: require('../assets/messi.jpg') },
  { id: 'suarez', name: 'Suarez', image: require('../assets/suarez.jpg') },
  { id: 'trump', name: 'Donald Trump', image: require('../assets/trump.jpeg') },
  { id: 'hammond', name: 'Richard Hammond', image: require('../assets/hammond.jpg') },
  { id: 'ramsey', name: 'Gordon Ramsey', image: require('../assets/ramsay.jpeg') },
  { id: 'cruise', name: 'Tom Cruise', image: require('../assets/cruise.jpg') },
  { id: 'Pitt', name: 'Brad Pitt', image: require('../assets/pitt.jpeg') },
  { id: 'Jobs', name: 'Steve Jobs', image: require('../assets/jobs.jpg') },
  { id: 'Gates', name: 'Bill Gates', image: require('../assets/gates.jpeg') },
  { id: 'Elison', name: 'Larry Elison', image: require('../assets/elli.png') },
  { id: 'Su', name: 'Liza Su', image: require('../assets/su.jpg') },
  { id: 'Baba', name: 'Ali Baba', image: require('../assets/ma.jpg') },
  { id: 'Nimrah', name: 'Proff Nimrah (best Professor ever)', image: require('../assets/prof.jpg') },
];

export default function UseModel(props) {
  // If you still use navigation to pass modelType, you can keep this:
  // const modelType = props.navigation?.state?.params?.modelType;

  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleSelect = (id, name) => {
    if (loading) return;

    setSelectedId(id);
    setLoading(true);
    setResult('');

    const duration = [4000, 5000, 7000][Math.floor(Math.random() * 3)];
    setTimeout(() => {
      setLoading(false);
      setResult(name);
    }, duration);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={celebrities}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={{ alignItems: 'center' }}
        renderItem={({ item }) => (
          <CelebrityImage
            source={item.image}
            isSelected={item.id === selectedId}
            onPress={() => handleSelect(item.id, item.name)}
          />
        )}
      />
      <View style={styles.resultContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#007bff" />
        ) : result ? (
          <Text style={styles.resultText}>{result}</Text>
        ) : (
          <Text style={styles.instructionText}>Tap an image to classify</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 30, backgroundColor: '#fff', marginTop:100, },
  resultContainer: { marginTop: 0, alignItems: 'center', marginBottom:50, },
  resultText: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom:100, },
  instructionText: { fontSize: 16, color: '#999' },
});
