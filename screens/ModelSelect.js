import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';

// Default models shown as cards
const DEFAULT_MODELS = [
  {
    id: 'image',
    name: '🖼 Celebrity Classifier',
    provider: 'Ali Noor',
    type: 'image',
  },
  {
    id: 'audio',
    name: '🔊 Audio Classifier - hehe detector',
    provider: 'Ali Noor',
    type: 'audio',
  },
];

// Model selection screen
export default function ModelSelect(props) {
  const navigation = props.navigation;
  // Get user's name from navigation params (if present)
  const name = navigation && navigation.state && navigation.state.params && navigation.state.params.name
    ? navigation.state.params.name
    : '';

  // State for models, download status, and selection
  const [models, setModels] = useState(DEFAULT_MODELS);
  const [downloaded, setDownloaded] = useState({ image: false, audio: false });
  const [selected, setSelected] = useState(null);

  // Handle new model creation from CreateModel screen
  useEffect(() => {
    const params = navigation && navigation.state && navigation.state.params ? navigation.state.params : {};
    if (params.newModel) {
      const exists = models.some((m) => m.id === params.newModel.id);
      if (!exists) {
        setModels((prev) => [
          ...prev,
          {
            id: params.newModel.id,
            name: `🆕 ${params.newModel.name}`,
            provider: 'You',
            type: 'custom',
            ...params.newModel,
          },
        ]);
        setDownloaded((prev) => ({ ...prev, [params.newModel.id]: false }));
      }
      // Clear the param so it doesn't keep adding
      navigation.state.params.newModel = undefined;
    }
  }, [navigation, models]);

  // Simulate model download
  const downloadModel = (id) => {
    setTimeout(() => {
      setDownloaded((prev) => ({ ...prev, [id]: true }));
    }, 500);
  };

  // Navigate to UseModel screen for selected model
  const goToUseScreen = () => {
    if (selected && downloaded[selected]) {
      navigation.navigate('UseModel', { modelType: selected });
    }
  };

  return (
    <View style={styles.container}>
      {/* User's name and instructions */}
      <Text style={styles.header}>{name} 🟢</Text>
      <View style={styles.underline} />
      <Text style={styles.provider}>Download the Models provided by : Ali Noor</Text>

      {/* Model cards */}
      {models.map((model) => (
        <TouchableOpacity
          key={model.id}
          style={[
            styles.card,
            selected === model.id && downloaded[model.id] && styles.selectedCard,
          ]}
          onPress={() => setSelected(model.id)}
          onLongPress={() => downloadModel(model.id)}
        >
          <Text style={styles.cardText}>{model.name}</Text>
          <Text style={styles.icon}>⬇️</Text>
        </TouchableOpacity>
      ))}

      {/* Use button */}
      <View style={styles.buttonRow}>
        <Button
          title="Use"
          onPress={goToUseScreen}
          disabled={!selected || !downloaded[selected]}
          color="#fff"
        />
      </View>

      {/* Floating Plus Button to create a new model */}
      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => navigation.navigate('CreateModel')}
      >
        <Text style={styles.plusIcon}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles for ModelSelect screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Cochin',
    fontStyle: 'italic',
  },
  underline: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  provider: {
    color: '#fff',
  },
  card: {
    borderColor: '#fff',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
  },
  selectedCard: {
    borderColor: '#0f0',
    backgroundColor: '#111',
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 10,
    fontSize: 20,
  },
  buttonRow: {
    marginTop: 30,
  },
  plusButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#007bff',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  plusIcon: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 2,
  },
});
