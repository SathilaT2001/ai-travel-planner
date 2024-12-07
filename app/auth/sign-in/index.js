import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from './../../../constants/Colors';
import { auth } from './../../../configs/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  

  const onSignIn=()=>{

    if (!email || !password ) {
      ToastAndroid.show('Please Enter Email and Password', ToastAndroid.BOTTOM);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    router.replace('/mytrip')
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,error.code);
    if(errorCode=='auth/invalid-credential')
    {
      ToastAndroid.show("invalid-credential",ToastAndroid.LONG)
    }
  });
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Sign In Your Account</Text>
      <Text style={styles.subHeader}>Welcome Back</Text>
      <Text style={styles.subHeader}>We Miss You!</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
        style={styles.input} 
        onChangeText={value=>setEmail(value)}
        placeholder="Enter Email" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} 
        onChangeText={value=>setPassword(value)}
        placeholder="Enter Password" secureTextEntry />
      </View>

      <TouchableOpacity onPress={onSignIn}
      style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={() => router.replace('auth/sign-up')}>
        <Text style={styles.secondaryButtonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 40,
    height: '100%',
    backgroundColor: Colors.White,
  },
  header: {
    fontFamily: 'outfit Bold',
    fontSize: 30,
    marginTop: 30,
  },
  subHeader: {
    fontFamily: 'outfit',
    fontSize: 20,
    color: Colors.Gray,
    marginTop: 10,
  },
  inputGroup: {
    marginTop: 20,
  },
  label: {
    fontFamily: 'outfit',
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.Gray,
  },
  primaryButton: {
    padding: 20,
    backgroundColor: Colors.Primary,
    borderRadius: 15,
    marginTop: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.White,
    fontFamily: 'outfit',
  },
  secondaryButton: {
    padding: 20,
    backgroundColor: Colors.White,
    borderRadius: 15,
    marginTop: 20,
    borderWidth: 1,
  },
  secondaryButtonText: {
    textAlign: 'center',
    color: Colors.Primary,
    fontFamily: 'outfit',
  },
});
