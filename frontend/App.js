import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/Navbar'
 import Content from './src/components/Content'
 //import Teste from './src/components/Teste'
export default function App() {
  return (
    <View style={styles.container}>
<Navbar/>
<Content/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: 'black',
  width: '100%',
  height: '100%',
  flexDirection: 'column'
  },
});
