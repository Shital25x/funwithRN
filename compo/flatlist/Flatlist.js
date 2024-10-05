import { StyleSheet, Text, View,FlatList ,ScrollView} from 'react-native'
import React from 'react'


const Flatlist = () => {
    const userdata=[
        {
            id:1,
            name:"Shital",
            course:"B.Tech"
        },
        {
            id:2,
            name:"Annu",
            course:"B.Tech"
        },
        {
            id:3,
            name:"Nandita",
            course:"B.Tech"
        },
        {
            id:4,
            name:"Kunjal",
            course:"BBA"
        },
        {
            id:5,
            name:"abcd",
            course:"B.Tech"
        },
        {
            id:6,
            name:"asdf",
            course:"B.Tech"
        },
        {
            id:7,
            name:"lk",
            course:"B.Tech"
        },
        {
            id:8,
            name:"dkf",
            course:"BBA"
        },
        {
            id:9,
            name:"dfk",
            course:"B.Tech"
        },
        {
            id:10,
            name:"fg",
            course:"BBA"
        },
        {
            id:11,
            name:"gf",
            course:"B.Tech"
        },
        {
            id:12,
            name:"fdz",
            course:"BBA"
        },
    ]
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.head}>Flatlist</Text>
    <FlatList
    data={userdata}
    renderItem={({item})=>
    <View  style={styles.flex}>
        <Text style={styles.head}>{item.name}</Text>
        <Text  style={styles.head}>{item.course}</Text>
    </View>}
    keyExtractor={item=>item.id}
    showsHorizontalScrollIndicator={false}
    horizontal={false}
    numColumns={4}
    key={'numColumns4'} 
    />
    <View style={styles.flexs}>
    <Text style={styles.shital}>shital</Text>
    <Text style={styles.shital}>shital</Text>
    <Text style={styles.shital}>shital</Text>
    <Text style={styles.shital}>shital</Text>
    <Text style={styles.shital}>shital</Text>
    <Text style={styles.shital}>shital</Text>
    <Text style={styles.shital}>shital</Text>
    <Text style={styles.shital}>shital</Text>
    <Text style={styles.shital}>shital</Text>
    <Text style={styles.shital}>shital</Text>
    <Text style={styles.shital}>shital</Text>
    <Text style={styles.shital}>shital</Text>
    <Text style={styles.shital}>shital</Text>
    <Text style={styles.shital}>shital</Text>
    <Text style={styles.shital}>shital</Text>
    <Text style={styles.shital}>shital</Text>
    </View>
    </ScrollView>
  )
}

export default Flatlist

const styles = StyleSheet.create({
    head:{
        textAlign:'center',
        fontSize:25,
        marginTop:10,
        fontWeight:"500"
    },
    name:{
        textAlign:'center',
        fontSize:25,
    },
    flex:{
        borderWidth:2,
        borderColor:'black',
        width:100
    },
    shital:{
        fontSize:20,
        borderColor:'black',
        borderWidth:2,
        width:100,
        height:100,
        marginLeft:30,
        marginTop:30
    },
    flexs:{
        flexDirection:'row',
        flexWrap:'wrap',
      
    }
})