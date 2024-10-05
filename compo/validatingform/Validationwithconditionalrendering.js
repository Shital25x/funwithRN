// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import React, { useState } from 'react';

// const Validationwithconditionalrendering = () => {
//     const [name, setname] = useState("");
//     const [email, setemail] = useState("");
//     const [phone, setphone] = useState("");
//     const [password, setpassword] = useState("");
//     const [nameError, setNameError] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [phoneError, setPhoneError] = useState("");
//     const [passwordError, setPasswordError] = useState("");

//     const validateForm = () => {
//         // Reset errors
//         setNameError("");
//         setEmailError("");
//         setPhoneError("");
//         setPasswordError("");

//         let isValid = true;

//         // Name validation
//         if (!name.trim()) {
//             setNameError("Name is required.");
//             isValid = false;
//         }

//         // Email validation
//         if (!email.trim()) {
//             setEmailError("Email is required.");
//             isValid = false;
//         } else {
//             const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!emailPattern.test(email)) {
//                 setEmailError("Invalid email format.");
//                 isValid = false;
//             }
//         }

//         // Phone validation
//         if (!phone.trim()) {
//             setPhoneError("Phone number is required.");
//             isValid = false;
//         } else {
//             const phonePattern = /^[0-9]{10}$/;
//             if (!phonePattern.test(phone)) {
//                 setPhoneError("Phone number must be 10 digits.");
//                 isValid = false;
//             }
//         }

//         // Password validation
//         if (!password.trim()) {
//             setPasswordError("Password is required.");
//             isValid = false;
//         } else if (password.length < 6) {
//             setPasswordError("Password must be at least 6 characters long.");
//             isValid = false;
//         }

//         return isValid;
//     };

//     const Handlesubmit = () => {
//         if (validateForm()) {
//             alert("Form submitted successfully!");
//             // Reset form if necessary
//             setname("");
//             setemail("");
//             setphone("");
//             setpassword("");
//         }
//     };

//     return (
//         <View>
//             <Text style={styles.txt}>Simple Validation</Text>

//             <TextInput
//                 style={styles.txtinput}
//                 placeholder='Enter name'
//                 onChangeText={value => setname(value)}
//                 value={name}
//             />
//             {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

//             <TextInput
//                 style={styles.txtinput}
//                 placeholder='Enter email'
//                 onChangeText={value => setemail(value)}
//                 value={email}
//             />
//             {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

//             <TextInput
//                 style={styles.txtinput}
//                 placeholder='Enter phone number'
//                 onChangeText={value => setphone(value)}
//                 value={phone}
//                 keyboardType='numeric' // For better UX
//             />
//             {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}

//             <TextInput
//                 style={styles.txtinput}
//                 placeholder='Enter password'
//                 onChangeText={value => setpassword(value)}
//                 value={password}
//                 secureTextEntry // Hide password
//             />
//             {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

//             <Button title='Submit' onPress={Handlesubmit} />
//         </View>
//     );
// };

// export default Validationwithconditionalrendering;

// const styles = StyleSheet.create({
//     txt: {
//         textAlign: "center",
//         fontSize: 26,
//         marginTop: 20,
//         fontWeight: "600",
//     },
//     txtinput: {
//         height: 50,
//         width: 200,
//         borderColor: "black",
//         borderWidth: 2,
//         margin: 10,
//         paddingLeft: 10, // Add some padding for better UX
//     },
//     errorText: {
//         color: 'red',
//         marginLeft: 10,
//         marginBottom: 10,
//     }
// });
// ...............................
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';

const Validationwithconditionalrendering = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');
  const [nameverify, setnameverify] = useState('');
  const [emailverify, setemailverify] = useState('');
  const [phoneverify, setphoneverify] = useState('');
  const [passwordverify, setpasswordverify] = useState('');

  const validateform = () => {
    // reset everything
    setnameverify('');
    setemailverify('');
    setphoneverify('');
    setpasswordverify('');

    let isvalid = true;
    //name validation
    const namePattern = /^[a-zA-Z ]+$/;
    if (!name.trim()) {
      setnameverify('Name is required');
      isvalid = false;
    } else if (!namePattern.test(name)) {
      setnameverify('Name must contain only alphabets and space');
    } else {
      if (name.length < 2) {
        setnameverify('Name must be more than one character');
        isvalid = false;
      } else if (!namePattern) {
        setnameverify('Name must contain only alphabets and space');
      }
    }
    // email validation

    if (!email.trim()) {
      setemailverify('Email is required');
      isvalid = false;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        setemailverify('Enter valid email');
      }
    }
    // phone number validation
    if (!phone.trim()) {
      setphoneverify('Phone number is required');
      isvalid = false;
    } else if (phone.length != 10) {
      setphoneverify('Phone number must contain 10 digits');
      isvalid = false;
    } else {
      const phonePattern = /^[0-9]+$/;
      if (!phonePattern.test(phone)) {
        setphoneverify('Phone number should contain numbers from 0-9');
      }
      isvalid = false;
    }
    if (!password.trim()) {
      setpasswordverify('Password is required');
      isvalid = false;
    }
    //     else if(password.length<6 || password.length>50){
    //         setpasswordverify("password must be of 6 characters and less than 50")
    //    isvalid=false;
    //     }
    else {
      const passwordPattern =
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?]).{6,50}$/;
      if (!passwordPattern.test(password)) {
        setpasswordverify(
          'password must contain atleast one digit,special character,uppercase and lowercase and must be atleast 6 character',
        );
        isvalid = false;
      }
    }
    return isvalid;
  };

  const HandlePress = () => {
    if (validateform()) {
      Alert.alert('Registration successful');
      // Clear the fields and validation messages only if the form is valid
      setname('');
      setemail('');
      setphone('');
      setpassword('');
      setnameverify('');
      setemailverify('');
      setphoneverify('');
      setpasswordverify('');
    }
  };
  
  return (
    <View>
      <Text>Validation</Text>
      <TextInput
        placeholder="Enter name"
        value={name}
        onChangeText={value => setname(value)}
      />
      {nameverify ? <Text style={styles.text}>{nameverify}</Text> : null}
      <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={value => setemail(value)}
      />
      {emailverify ? <Text style={styles.text}>{emailverify}</Text> : null}
      <TextInput
        placeholder="Enter phone number"
        value={phone}
        onChangeText={value => setphone(value)}
      />
      {phoneverify ? <Text style={styles.text}>{phoneverify}</Text> : null}
      <TextInput
        placeholder="Enter password"
        value={password}
        onChangeText={value => setpassword(value)}
      />
      {passwordverify ? (
        <Text style={styles.text}>{passwordverify}</Text>
      ) : null}
      <Button title="Submit" onPress={() => HandlePress()} />
    </View>
  );
};

export default Validationwithconditionalrendering;

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});
