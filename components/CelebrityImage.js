// components/CelebrityImage.js
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function CelebrityImage({ source, isSelected, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.imageWrapper, isSelected && styles.selected]}>
      <Image source={source} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    margin: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'transparent',
    overflow: 'hidden',
  },
  selected: {
    borderColor: '#007bff',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
