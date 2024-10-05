// only 1 package required
import { View, Text, Button } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";
export default function Toastmsg() {
  const ToastHandle = () => {
    Toast.show({
      type: "success",
      text1: "Message successful",
      text2: "The message has been sent successfully",     
    });
  };
  const ToastHandle2 = () => {
    Toast.show({
      type:"error",
      text1: "Message not successful",
      text2: "The message has not been sent successfully",
    });
  };
  return (
    <View>
      <Text style={{ fontSize: 40, textAlign: "center", marginTop: 174 }}>
        Toast
      </Text>
      <View style={{marginTop:100}}>
        <Button title="Toast message" onPress={ToastHandle}></Button>
        <Button title="Toast message2" onPress={ToastHandle2}></Button>
      </View>
      <Toast autoHide={true} visibilityTime={5000}/>
    </View>
  );
}
