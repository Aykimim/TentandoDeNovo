// AssetExample.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <View style={styles.box_1}></View>
      <View style={styles.box_2}></View>
      <View style={styles.box_3}></View>
      <View style={styles.line_1}></View>
      <View style={styles.line_2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  box_1: {
    borderRadius: 50, // Use a numeric value instead of a string
    backgroundColor: 'gold',
    width: 100,
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  box_2: {
    borderRadius: 50,
    backgroundColor: 'lightgoldenrodyellow',
    width: 100,
    height: 100,
    position: 'absolute',
    top: 200,
    left: 0,
  },
  box_3: {
    borderRadius: 50,
    backgroundColor: 'lightsalmon',
    width: 100,
    height: 100,
    position: 'absolute',
    top: 150,
    left: 200,
  },
  line_1: {
    width: 1,
    height: 100,
    backgroundColor: 'grey',
    position: 'absolute',
    top: 100,
    left: 50,
  },
  line_2: {
    width: 1,
    height: 115,
    backgroundColor: 'grey',
    position: 'absolute',
    top: 170,
    left: 150,
    transform: [{ rotate: '-120deg' }],
  },
});
