import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import About from '../../components/About';
import Home from './Home';
import Page from './Page';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {createDrawerNavigator} from '@react-navigation/drawer'

const stack=createNativeStackNavigator();
const tab=createBottomTabNavigator();
const drawer=createDrawerNavigator();
const Stack = () => {
  return (
   <NavigationContainer>
    {/* <stack.Navigator>
    <stack.Screen name='Home' component={Home}/>
    <stack.Screen name='About' component={About} />
    </stack.Navigator> */}
    {/* <tab.Navigator>
      <tab.Screen name='Home' component={Home} options={{
        tabBarIcon:({focused,color,size})=>(
<Icon name="inbox"color="red" size={20}/>
        )
      }}/>
      <tab.Screen name='About' component={About}/>
    </tab.Navigator> */}
    <drawer.Navigator>
      <drawer.Screen name='Home' component={Home} options={{
        drawerIcon:({focused,color,size})=>(
          <Icon name="rocket" color="red" size={30}/>
        )
      }}/>
      <drawer.Screen name='About' component={About}/>
    </drawer.Navigator>

   </NavigationContainer>
  )
}

export default Stack

const styles = StyleSheet.create({})