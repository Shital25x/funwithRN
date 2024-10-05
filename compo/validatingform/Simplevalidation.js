import { StyleSheet, Text, View,TextInput, Button, Alert} from 'react-native'
import React, { useState } from 'react'
import { retry } from '@reduxjs/toolkit/query';

const Simplevalidation = () => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [phone,setphone]=useState(""); 
    const [password,setpassword]=useState(""); 

    const validateForm = () => {
        if (!name.trim()) {
          Alert.alert('Validation Error', 'Username is required');
          return false;
        }
        if (!email.trim()) {
          Alert.alert('Validation Error', 'Email is required');
          return false;
        }
        if(!phone.trim()){
            Alert.alert("validation error" ,'Phone number is required');
            return false;
        }
        if(!password.trim()){
            Alert.alert("Validation error",'password is required');
            return false;
        }
           // Check if name has valid characters (only alphabets and spaces)
    const namePattern = /^[a-zA-Z ]+$/;
    if (!namePattern.test(name)) {
      Alert.alert('Validation Error', 'Name can only contain letters and spaces');
      return false;
    }

    // Check if the length of the name is within a valid range
    if (name.length < 2 || name.length > 50) {
      Alert.alert('Validation Error', 'Name must be between 2 and 50 characters long');
      return false;
    }
        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          Alert.alert('Validation Error', 'Enter a valid email address');
          return false;
        }
        // simple phone number validation
        const phonePattern=/^[0-9]+$/;
        if(!phonePattern.test(phone)){
            Alert.alert('Validation error','phone number must contain digits only')
           return false;
        }
        if(phone.length!=10){
            Alert.alert('Validation error','Phone number must contain 10 digits')
            return false;
        }
        // simple password validation
        if(password.length<6 || password.length>50){
            Alert.alert("Validation error",'password must contain 6 letters and do not exceed 50 letters')
            return false;
        }
        const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,50}$/;
        if (!passwordPattern.test(password)) {
            Alert.alert("Validation error", 'Password must contain at least one digit, one lowercase letter, one uppercase letter, and one special character');
            return false;
        }
        
        return true;
      };
    const Handlesubmit=()=>{
        if (validateForm()) {
            Alert.alert('Success', 'Form submitted successfully!');
            // Handle form submission
          } 
    }
  return (
    <View>
      <Text style={styles.txt}>Simplevalidation</Text>
      <TextInput style={styles.txtinput} placeholder='enter name' onChangeText={value=>setname(value)} value={name}/>
      <TextInput style={styles.txtinput} placeholder='enter email' onChangeText={value=>setemail(value)} value={email}/>
      <TextInput style={styles.txtinput} placeholder='enter phone number' onChangeText={value=>setphone(value)} value={phone}/>
      <TextInput style={styles.txtinput} placeholder='enter password' onChangeText={value=>setpassword(value)} value={password}/>
      <Button title='Submit' onPress={()=>Handlesubmit()}/>
    </View>
  )
}

export default Simplevalidation

const styles = StyleSheet.create({
    txt:{
        textAlign:"center",
        fontSize:26,
        marginTop:20,
        fontWeight:"600"
    },
    txtinput:{
        height:50,
        width:200,
        borderColor:"black",
        borderWidth:2,
        margin:10
    }
})