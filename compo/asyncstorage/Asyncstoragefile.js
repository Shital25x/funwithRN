import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Asyncstoragefile = () => {

  // set Data
  const Handlegetdata=async()=>{
await AsyncStorage.setItem("Name","Shital");
  }
  // get Data
  const Handlesetdata=async()=>{
const getitem=await AsyncStorage.getItem("Name");
console.warn(getitem);
  }
  // delete Data
   const HandleDeleteitem=async()=>{
    const deleteitem=await AsyncStorage.removeItem("Name")
   }
  return (
    <View>
      <Text>Asyncstoragefile</Text>
      <Button title='set data' onPress={Handlegetdata}/>
      <Button title='get data' onPress={Handlesetdata}/>
      <Button title='Delete' onPress={HandleDeleteitem}/>
    </View>
  )
}

export default Asyncstoragefile

const styles = StyleSheet.create({})