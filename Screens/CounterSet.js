import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const CounterSet = ({setCounterValueset}) => {
  const [Counter,setCounter] = useState('1');

  const handlechange=(text)=>{
   setCounter(text)
   setCounterValueset(text)
  }
  return (
    <View style={{flex:0.5 , alignItems:'center' }}>
   <TextInput value={Counter}  style={{borderWidth:2 , width:'70%' , borderRadius:8 , borderColor:"blue" ,
    paddingHorizontal:10, paddingVertical:8 , fontSize:18 }} onChangeText={(text) => handlechange(text)}  />
    </View>
  )
}

export default CounterSet

const styles = StyleSheet.create({})