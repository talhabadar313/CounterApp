import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CounterView from '../Components/CounterView'
import CounterController from '../Components/CounterController'

const CounterScreen = ({CounterValueset}) => {
    const [CounterValue , setCounterValue] = useState(0);
  return (
    <View style={{flex:1 , alignItems:'center' , justifyContent:'center' }}>
      <CounterView CounterValue={CounterValue}/>
      <CounterController setCounterValue={setCounterValue} setcountervalueset={CounterValueset}/>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})