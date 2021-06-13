import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from '../constants';

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>Detail Screen Placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center'
  }
});