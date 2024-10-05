import { StyleSheet, Text, View,FlatList, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const Assignment = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      marks: { physics: 80, chemistry: 75, math: 90 }
    },
    {
      id: 2,
      name: "Jane Smith",
      marks: { physics: 85, chemistry: 80, math: 88 }
    },
    {
      id: 3,
      name: "Sam Johnson",
      marks: { physics: 70, chemistry: 60, math: 75 }
    },
    {
      id: 4,
      name: "Lucy Brown",
      marks: { physics: 95, chemistry: 89, math: 92 }
    },
    {
      id: 5,
      name: "Mike Davis",
      marks: { physics: 60, chemistry: 55, math: 65 }
    }
  ];
  const Handlepress=(name,marks)=>{
    const totalMarks=marks.physics+ marks.chemistry + marks.math;
    const Percentage=(((totalMarks)/300)*100).toFixed(2);
    Alert.alert("Student details",  `Name: ${name} \nTotal Marks: ${totalMarks} \n Percentage: ${Percentage}`,
         [
      {
        text: "OK", // Button text
        onPress: () => console.log("OK Pressed"), // Action on button press
        style: "default" // Can be "default", "cancel", or "destructive"
      }]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
      <Text style={styles.headtxt}>S No.</Text>
      <Text style={styles.headtxt}>Name</Text>
      <Text style={styles.headtxt}>Marks in PCM</Text>
      </View>
    <FlatList
    data={data}
    keyExtractor={text=>text.id}
    renderItem={({item})=>
    <View style={styles.flex}>
    <TouchableOpacity style={[styles.txt,{marginLeft:30}]} onPress={()=>Handlepress(item.name,item.marks)}><Text style={styles.add}>+</Text></TouchableOpacity>
      <Text style={[styles.txt,{marginRight:55}]}>{item.name}</Text>
      <View>
      <Text style={styles.txt}>Physics:{item.marks.physics}</Text>
      <Text style={styles.txt}>Chemistry:{item.marks.chemistry}</Text>
      <Text style={styles.txt}>Math:{item.marks.math}</Text>
      </View>
    </View>
    }/>
    </View>
  )
}

export default Assignment

const styles = StyleSheet.create({
  heading:{
    flexDirection:'row',
    justifyContent:"space-around",
    marginTop:20,
    backgroundColor:"black",
    height:40,
    width:"90%",
    margin:'auto'
  
  },
  headtxt:{
    fontSize:16,
    color:'white',
    marginTop:8,
    fontWeight:"500"
  },
  flex:{
    flexDirection:'row',
    margin:20
  },
  txt:{
    flex:1,
  },
  add:{
    backgroundColor:'black',
    width:30,
    height:30,
    color:'white',
    textAlign:"center",
    borderRadius:50,
    fontWeight:"600"
  },
  
})