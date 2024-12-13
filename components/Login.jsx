import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { RouterStore } from 'expo-router/build/global-state/router-store';



export default function Login() {

  const router=useRouter();

  return (
    <View>
      <Image source={require('./../assets/images/login.png')}
        style={{
            width:'450',
            height:'520',
            
        }}
      />
      <View style={styles.container}>
        <Text style={{
            fontSize:30,
            fontFamily:'outfit Bold',
            textAlign:'center',
            marginTop:10

        }}>
            Travel Planner
        </Text>

        <Text style={{
            fontFamily:'outfit',
            fontSize:16,
            color:Colors.Gray,
            textAlign:'center',
            marginTop:20
        }}>Discover your next adventure
            effortlessly. Personalized
            itineraries at your fingertips. Travel
            smarter with Al-driven insights."</Text>

      <TouchableOpacity style={styles.button}
      onPress={()=>router.push("/auth/sign-in")}
      >
      
        <Text style={{
            color:Colors.White,
            fontFamily:'outfit',
            fontSize:18,
        }}>Continue</Text>
      </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
    container:{
    backgroundColor:Colors.White,
    marginTop:-20, 
    height:'100%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:25
    },
    button:{
        padding:15,
        backgroundColor:Colors.Primary,
        borderColor:Colors.Primary,
        borderRadius:99,
        marginTop:'20%',
        flexDirection:"row",
        gap:15,
        alignItems:'center',
        justifyContent:'center'
    }
})