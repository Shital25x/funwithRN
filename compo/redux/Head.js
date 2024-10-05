import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Head = () => {
  return (
    <View>
      <Text style={styles.header}>0</Text>
    </View>
  )
}

export default Head

const styles = StyleSheet.create({
  header:{
    backgroundColor:"orange",
    height:60,
    color:"white",
    fontSize:33,
    textAlign:"right",
    padding:10,
     
  }
})