import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CounterController from './CounterController'

const CounterView = ({CounterValue}) => {
  return (
    <View style={{marginBottom:20, alignItems:'center' , justifyContent:"center"}}>
      <Text style={{fontSize:30, fontWeight:'bold' , color:'grey'}}>{CounterValue}</Text>
    </View>
  )
}

export default CounterView

const styles = StyleSheet.create({})