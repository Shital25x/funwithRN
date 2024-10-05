import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const About = (props) => {
  return (
    <View>
      <Text>About</Text>
     <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate('Home')}>
        <Text style={styles.btntxt}>Go to Home</Text>
     </TouchableOpacity>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    btn:{
        height:50,
        width:120,
        backgroundColor:'blue',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    btntxt:{
        color:'white',
        fontSize:20
    }
})