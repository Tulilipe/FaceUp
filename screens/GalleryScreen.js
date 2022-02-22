import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <Text>GalleryScreen</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
