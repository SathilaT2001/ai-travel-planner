import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useReducer } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors';
import { useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignUp() {
  const navigation=useNavigation();
  const router=useRouter();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  })

  return (
    <View style={{
      padding:25,
      paddingTop:50,
      backgroundColor:Colors.White,
      height:'100%'
    }}>

      <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{
        fontFamily:'outfit Bold',
        fontSize:30,
        marginTop:30
      }}>Create Account</Text>

    <View style={{
      marginTop:50
    }}>
      <Text style={{
        fontFamily:'outfit'
      }}>Full Name</Text>
      <TextInput
      style={styles.input}
      placeholder='Enter Full Name'/>
    </View>

    <View style={{
      marginTop:20
    }}>
      <Text style={{
        fontFamily:'outfit'
      }}>Email</Text>
      <TextInput
      style={styles.input}
      placeholder='Enter Email'/>
    </View>

    <View style={{
      marginTop:20
    }}>
      <Text style={{
        fontFamily:'outfit',
        
      }}>Password
      </Text>
      <TextInput 
      secureTextEntry={true}
      style={styles.input}
      placeholder='Enter Password'/>
    </View>

     {/*sign in button*/}
     <TouchableOpacity style={{
      padding:20,
      backgroundColor:Colors.Primary,
      borderRadius:15,
      marginTop:50,
      
    }}>
      <Text style={{
        textAlign:'center',
        color:Colors.White,
        fontFamily:'outfit'
      }}>Create Account</Text>
    </TouchableOpacity>

     {/*Create account button*/}
     <TouchableOpacity
     onPress={()=> router.replace("auth/sign-in")}

     style={{
      padding:20,
      backgroundColor:Colors.White,
      borderRadius:15,
      marginTop:20,
      borderWidth:1
    }}>
      <Text style={{
        textAlign:'center',
        color:Colors.Primary,
        fontFamily:'outfit'
      }}>Sign In</Text>
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    padding:15,
    borderWidth:1,
    borderRadius:10,
    borderColor:Colors.Gray
}
})