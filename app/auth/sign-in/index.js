import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from './../../../constants/Colors';
import { Route } from 'expo-router/build/Route';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function SignIn() {
  const navigation=useNavigation();
  const router=useRouter();
  
useEffect(()=>{
  navigation.setOptions({
    headerShown:false
  })
},[])

  return (
    <View style={{
      padding:25,
      paddingTop:40,
      height:'100%',
      backgroundColor:Colors.White,
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily:'outfit Bold',
        fontSize:30,
        marginTop:30
      }}>Sign In Your Account</Text>

      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.Gray,
        marginTop:20
      }}>Welcome Back</Text>

      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.Gray,
        marginTop:10
      }}>We Miss You!</Text>

    <View style={{
      marginTop:50
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
    <View style={{
      padding:20,
      backgroundColor:Colors.Primary,
      borderRadius:15,
      marginTop:50,
      
    }}>
      <Text style={{
        textAlign:'center',
        color:Colors.White,
        fontFamily:'outfit'
      }}>Sign In</Text>
    </View>

     {/*Create account button*/}
     <TouchableOpacity
     onPress={()=> router.replace("auth/sign-up")}

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
      }}>Create Account</Text>
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
});