import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CounterController = ({setCounterValue, setcountervalueset}) => {
    const Incrementvalue=()=>{
        setCounterValue(tempValue=>parseInt(tempValue)+parseInt(setcountervalueset))
    }
    const DecrementValue=()=>{
        setCounterValue(tempValue=>tempValue-setcountervalueset)
    }
  return (
    <View style={{flexDirection:'row' , alignItems:'center' , justifyContent:'center'}}>
      <TouchableOpacity style={{backgroundColor:"blue" , padding:10 , borderRadius:8 , marginRight:10}} onPress={()=>Incrementvalue()}>
        <Text style={{fontSize:20 , color:'white'}}>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:"blue" , padding:10 , borderRadius:8}} onPress={()=>DecrementValue()}>
        <Text style={{fontSize:20 , color:'white'}}>Decrement</Text>
      </TouchableOpacity>
      </View>
  )
}

export default CounterController

const styles = StyleSheet.create({})