import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../../configs/FirebaseConfig';
import { Colors } from './../../../constants/Colors';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onCreateAccount = () => {
    if (!email || !password || !fullName) {
      ToastAndroid.show('Please Enter All Details', ToastAndroid.BOTTOM);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        ToastAndroid.show('Account Created Successfully', ToastAndroid.BOTTOM);
      })
      .catch((error) => {
        console.error(error.message);
        ToastAndroid.show(error.message, ToastAndroid.BOTTOM);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.header}>Create Account</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter Full Name" onChangeText={setFullName} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email" onChangeText={setEmail} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry onChangeText={setPassword} />
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={onCreateAccount}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={() => router.replace('auth/sign-in')}>
        <Text style={styles.secondaryButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 50,
    backgroundColor: Colors.White,
    height: '100%',
  },
  header: {
    fontFamily: 'outfit Bold',
    fontSize: 30,
    marginTop: 30,
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
