
import React from 'react';
import { View, Image, StyleSheet, Text, Button } from 'react-native';
import success from '../assets/success.png';
import fail from '../assets/fail.png';

const ResultScreen = ({ passed, onReload, finalScore }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{passed ? "You passed!" : "You didn't pass."}</Text>
      <Image
        source={passed ? success : fail}
        style={styles.image}
      />
      <Text> finalScore : {finalScore}</Text>
      {passed !== null && <Button title="Reload" onPress={onReload} />}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ResultScreen;
