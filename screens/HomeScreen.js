import React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input } from 'react-native-elements';

export default function HomeScreen(props) {
  return (
    <ImageBackground
      source={require('../assets/home.jpg')}
      style={styles.container}
    >
      <Input
        containerStyle={{ marginBottom: 25, width: '70%' }}
        inputStyle={{ marginLeft: 10 }}
        placeholder='John'
        leftIcon={<Icon name='user' size={24} color='#009788' />}
      />
      <Button
        buttonStyle={{
          backgroundColor: '#009788',
        }}
        title='Go to gallery'
        type='solid'
        onPress={() => {
          props.navigation.navigate('BottomNavigator', { screen: 'Gallery' });
        }}
      />
      <StatusBar style='auto' />
    </ImageBackground>
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
