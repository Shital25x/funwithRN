import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = (props) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button title='Go to About' onPress={()=>props.navigation.navigate("About",{message:"hello i am from home page"})}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})