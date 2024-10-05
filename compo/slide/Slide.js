import { StyleSheet, Text, View,FlatList, Dimensions} from 'react-native'
import React from 'react'
const {height,width}=Dimensions.get('window');
const Slide = () => {
  return (
    <View>
    <View style={styles.flatlist}>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={[1,1,1,1,1]}
        renderItem={({item})=>
      <View style={styles.flat}>
        <View style={styles.view}></View>
        </View>
        }/>
    </View>
    </View>
  )
}

export default Slide

const styles = StyleSheet.create({
    flat:{
        height:height/2,
        width:width,    
        justifyContent:"center",
        alignItems:"center"
    },
    view:{
        backgroundColor:'green',
        height:"80%",
        width:"80%"
    }
})