import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuestionnaireScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Questions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default QuestionnaireScreen;
