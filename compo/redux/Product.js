import {StyleSheet, Text, View,FlatList, Image, Button} from 'react-native';
import React from 'react';
const image1=require("../img/img1.webp");
import { Action } from './Action';
import {useDispatch} from 'react-redux'
const Product = () => {
  const data = [
    {
      Name: 'Samsung',
      Price: 4000000,
      color: 'blue',
      image:image1,
    },
    {
        Name: 'Samsung',
        Price: 4000000,
        color: 'blue',
        image:image1,
      },
      {
        Name: 'Samsung',
        Price: 4000000,
        color: 'blue',
        image:image1,
      },
      {
        Name: 'Samsung',
        Price: 4000000,
        color: 'blue',
        image:image1,
      },
      {
        Name: 'Samsung',
        Price: 4000000,
        color: 'blue',
        image:image1,
      },
  ];
const dispatch=useDispatch();
  const HandlePress=(item)=>{
console.log("called",item);
dispatch(Action(item));
  } 
  return (
    <View>
    <FlatList
    style={styles.flatlist}
    data={data}
    keyExtractor={item=>item.id}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=>
    <View>
        <View style={styles.text}>
<Text style={styles.txt}>{item.Name}</Text>
<Text style={styles.txt}>{item.Price}</Text>
<Text style={styles.txt}>{item.color}</Text>
</View>
<Image source={item.image} style={styles.img}/>
<Button title='Add to cart' onPress={()=>HandlePress(item)}/>
<View style={styles.orangeLine} />
    </View>
}/>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
    img:{
        height:400,
        width:200,
    },
    flatlist:{
        margin:"auto"
    },
    orangeLine: {
        height: 2, // Thickness of the line
        backgroundColor: 'orange', // Line color
        marginTop: 10, // Space between button and line
        marginBottom: 20, // Space after the line
      },
      txt:{
       textAlign:'center',
       fontSize:18,
       marginTop:10
      }
});
