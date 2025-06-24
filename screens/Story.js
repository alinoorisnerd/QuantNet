import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Story({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('NameInput'), 30000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        The age of AI was peaceful. What Humans feared the most - AI turning against us never happened, but the nature eventually did. The 2nd Biggest flooding after Noah's ark took place. Result? The whole of Silicon Valley alongside its servers got wiped out. A 100 years of over-reliance and  dependency made humans forgoe books. Now it is upto the community to Communicate and revive the Computational Glory!

        {'\n\n'}
      </Text>
      <Image
        source={require('../assets/story.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontStyle: 'italic',
    fontFamily: 'Cochin',
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    resizeMode: 'contain',
  },
});
