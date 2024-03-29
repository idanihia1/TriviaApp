/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Trivia from './src/Trivia';

export default function App() {
  return (
    <View style={styles.container}>
      <Trivia />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00cc99',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import Trivia from './src/Trivia';

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <View style={styles.container}>
      {/* תצוגת הכפתור תתבצע רק אם המשחק טרם התחיל */}
      {!gameStarted && (
        <Button title="Start Game" onPress={handleStartGame} />
      )}
      {/* מסך המשחק */}
      {gameStarted && <Trivia />}
      {/* StatusBar */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00cc99',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



