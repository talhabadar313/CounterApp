import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CounterScreen from './Screens/CounterScreen';
import CounterSet from './Screens/CounterSet';
import { useState } from 'react';

export default function App() {
  const [CounterValueset , setCounterValueset]=useState(1);
  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
      <CounterScreen CounterValueset={CounterValueset}/>
      <CounterSet setCounterValueset={setCounterValueset}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
