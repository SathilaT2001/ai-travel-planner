import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

export default function Login() {
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
      <View style={styles.button}>
      <Image source={require('./../assets/images/Google-logo.png')}
        style={{
            width:'25',
            height:'25',
            //marginLeft:10,
            //marginTop:10
        }}
      />
        <Text style={{
            color:Colors.White,
            fontFamily:'outfit',
            fontSize:18,
        }}>Sign in with Google</Text>
      </View>
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