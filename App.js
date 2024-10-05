// import { View, Text } from 'react-native'
// import React from 'react'
// import {NavigationContainer} from '@react-navigation/native'
// import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import Home from './components/Home'
// import About from './components/About'
// const App = () => {
//   const Stack=createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
// <Stack.Screen name='Home' component={Home}/>
// <Stack.Screen name='About' component={About}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App

// Tab Navigation...............................
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import {NavigationContainer} from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Sign from './components/tab/Sign';
// import Login from './components/tab/Login';
// const App = () => {
//   const Tab=createBottomTabNavigator();

//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name='Sign' component={Sign}/>
//         <Tab.Screen name='Login' component={Login}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

// ....Drawer navigation(babel needs one line)..............................................
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import {NavigationContainer} from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Page from './drawernavigation/Page';
// import Contact from './drawernavigation/Contact';

// const App = () => {
//   const Drawer=createDrawerNavigator();
//   return (
//   <NavigationContainer>
//     <Drawer.Navigator>
//       <Drawer.Screen name="page" component={Page}/>
//       <Drawer.Screen name="contact" component={Contact}/>
//     </Drawer.Navigator>
//   </NavigationContainer>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

// .............Toast..........................................
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Toastmsg from './toast/Toastmsg'
// import Validation from './components/validation/Validation'
import Formik from './components/formik/Formik'
import Goal from './components/Goal'
import JioCinema from './components/JioCinema'
import Flatlist from './compo/flatlist/Flatlist'
import Todo from './compo/crud/Todo'
import Axios from './compo/axios/Axios'
import Assignment from './compo/assign/Assignment'
import Slide from './compo/slide/Slide'
import Formikyup from './compo/validation/Formikyup'
import Product from './compo/redux/Product'
import Head from './compo/redux/Head'
import Stack from './compo/navigation/Stack'
import Simplevalidation from './compo/validatingform/Simplevalidation'
import Validationwithconditionalrendering from './compo/validatingform/Validationwithconditionalrendering'
import Crud from './compo/crud/Todo'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Toastmsg/> */}
      {/* <Validation/> */}
      {/* <Formik/> */}
      {/* <Goal isGoal={false}/> */}
      {/* <JioCinema/> */}
      {/* <Flatlist/> */}
    <Crud/>
    {/* <Todo/> */}
{/* <Axios/> */}
{/* <Assignment/> */}
{/* <Slide/> */}
{/* <Formikyup/> */}
{/* <Head/>
<Product/> */}
{/* <Stack/> */}
{/* <Simplevalidation/> */}
{/* <Validationwithconditionalrendering/> */}

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

// ...................Activity......................
// import React from 'react';
// import {View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Entypo from 'react-native-vector-icons/Entypo';
// const App = () => {
//   const getColorAndIcon = value => {
//     const isNegative = parseFloat(value) < 0;
//     return {
//       color: isNegative ? 'red' : 'green',
//       icon: isNegative ? 'caret-down' : 'caret-up',
//     };
//   };

//   const renderSavings = (value, diff) => {
//     const {color, icon} = getColorAndIcon(diff);
//     return (
//       <View style={styles.savingsContainer}>
//         {/* <Icon name={icon} size={14} color={color} style={styles.icon} /> */}
//         <Text style={[styles.savingsText, {color}]}>{value}</Text>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* First Line with HODLINFO on the left and the right side elements */}
//       <View style={styles.first}>
//         <View style={styles.firstLine}>
//           <Text style={styles.header}>HOLDLINFO</Text>
//         </View>
//         <View style={styles.rightSide}>
//           <View style={styles.circle}>
//             <Text style={styles.circleText}>51</Text>
//           </View>
//           <TouchableOpacity style={styles.telegramButton}>
//             <Text style={styles.telegramText}>Connect Telegram</Text>
//           </TouchableOpacity>
//           <Switch style={styles.toggleSwitch} thumbColor="#69C3C4" />
//         </View>
//       </View>

//       {/* second lind */}
//       <View style={styles.secondLine}>
//         <TouchableOpacity style={styles.centeredButton}>
//           <Text style={styles.buttonText}>INR <Entypo name="triangle-down" size={16} color="white" /></Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.centeredButton}>
//           <Text style={styles.buttonText}>BTC <Entypo name="triangle-down" size={16} color="white" /></Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.centeredButton}>
//           <Text style={styles.buttonText}>BUY BTC</Text>
//         </TouchableOpacity>
//       </View>

//       {/*third line  */}
//       <Text style={styles.texts}>Best rate to Trade</Text>
//       <Text style={styles.rate}>₹ 26,56,110</Text>
//       <View style={styles.list}>
//         <View style={styles.one}>
//           <Text  style={styles.text}>0.1 %</Text>
//         </View>
//         <View style={styles.one}>
//         <Text  style={styles.text}>0.96 %</Text>
//         </View>
//         <View style={styles.one}>
//         <Text style={styles.text}>2.73 %</Text>
//         </View>
//         <View style={styles.one}>
//         <Text style={styles.text}>7.51 %</Text>
//         </View>
//       </View>
//       <Text style={styles.txt}>
//         Average BTC/INR net price including commission
//       </Text>

//       {/* 4th */}
//       <View style={styles.tblheader}>
//         {/* <Text style={styles.tblclm}>#</Text> */}
//         <Text style={styles.tblclm}>Platform</Text>
//         <Text style={styles.tblclm}>Last rate</Text>
//         <Text style={styles.tblclm}>Difference</Text>
//         <Text style={styles.tblclm}>Savings</Text>
//       </View>
//       <View style={styles.tblrow}>
//         {/* <Text style={styles.tblclm}>1</Text> */}
//         <Text style={styles.tblclm}><Icon name="rocket" size={15} color="blue" />  WazirX</Text>
//         <Text style={styles.tblclm}>₹ 25,72,612</Text>
//         <Text
//           style={[styles.tblclm, {color: getColorAndIcon('-3.14 %').color}]}>
//           -3.14 %
//         </Text>
//         {renderSavings('₹ 83,498', '-3.14 %')}
//       </View>
//       <View style={styles.tblrow}>
//         <Text style={styles.tblclm}><Icon name="bitcoin" size={15} color="purple" />   Bitbns</Text>
//         <Text style={styles.tblclm}>₹ 28,83,906</Text>
//         <Text style={[styles.tblclm, {color: getColorAndIcon('8.58 %').color}]}>
//           8.58 %
//         </Text>
//         {renderSavings('₹ 2,27,796', '8.58 %')}
//       </View>

//       <View style={styles.tblrow}>
//         <Text style={styles.tblclm}><Entypo name="colours" size={15} color="orange" />   Colodax</Text>
//         <Text style={styles.tblclm}>₹ 25,46,035</Text>
//         <Text
//           style={[styles.tblclm, {color: getColorAndIcon('-4.14 %').color}]}>
//           -4.14 %
//         </Text>
//         {renderSavings('₹ 1,10,074', '-4.14 %')}
//       </View>

//       <View style={styles.tblrow}>
//         <Text style={styles.tblclm}>     Zebpay</Text>
//         <Text style={styles.tblclm}>₹ 26,50,000</Text>
//         <Text
//           style={[styles.tblclm, {color: getColorAndIcon('-0.23 %').color}]}>
//           -0.23 %
//         </Text>
//         {renderSavings('₹ 6,110', '-0.23 %')}
//       </View>
// <View style={styles.btn}>
//       <TouchableOpacity style={styles.addButton}>
//         <Text style={styles.addButtonText}>Add hodlinfo to home screen</Text>
//       </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#121212',
//     padding: 20,
//   },
//   first: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   firstLine: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   header: {
//     fontSize: 24,
//     color: '#69C3C4',
//     fontWeight: 'bold',
//     marginTop: 14,
//     marginLeft: 9,
//   },
//   rightSide: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   circle: {
//     width: 30,
//     height: 30,
//     borderRadius: 20,
//     // backgroundColor: '#69C3C4',
//     borderWidth:2,
//     borderColor:"#69C3C4",
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   circleText: {
//     color: '#69C3C4',
//     fontSize: 13,
//     fontWeight: 'bold',
//   },
//   telegramButton: {
//     backgroundColor: '#69C3C4',
//     paddingVertical: 6,
//     paddingHorizontal: 5,
//     borderRadius: 5,
//     marginRight: 15,
//   },
//   telegramText: {
//     color: '#121212',
//     fontSize: 11,
//     fontWeight: 'bold',
//   },
//   toggleSwitch: {
//     transform: [{scaleX: 0.8}, {scaleY: 0.8}],
//   },
//   secondLine: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//     marginTop: 26,
//   },
//   centeredButton: {
//     backgroundColor: '#333',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginHorizontal: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   texts: {
//     fontSize: 18,
//     color: '#fff',
//     marginVertical: 10,
//     textAlign: 'center',
//   },
//   rate: {
//     fontSize: 44,
//     color: '#fff',
//     fontWeight: '500',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   tblheader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 8,
//   },
//   tblrow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 8,
//     backgroundColor: '#2E3241',
//     padding: 8,
//     borderRadius: 4,
//     marginTop: 6,
//   },
//   tblclm: {
//     flex: 1,
//     color: '#ffffff',
//     fontSize: 14,
//     marginHorizontal: 4, // Adjust the horizontal margin to add spacing
//   },
//   savingsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   txt: {
//     color: 'gray',
//     fontSize: 13,
//     textAlign: 'center',
//     marginBottom: 30,
//     marginTop:-5
//   },
//   list:{
//     flexDirection:'row',
//     justifyContent:'space-around',
//     marginBottom:20,
//     marginTop:2
//   },
//   text:{
//    color:"#69C3C4",
//    fontSize:20,
//   },
//   addButtonText:{
//     color:'#69C3C4',
//   },
//   addButton:{
//     height:35,
//     width:210,
//     borderColor:"#69C3C4",
//     borderWidth:1,
//     textAlignVertical:'center',
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   btn:{
//     flexDirection:'row',
//     justifyContent:'center',
//     marginTop:5
//   }
// });

// export default App;
