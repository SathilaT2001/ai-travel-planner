import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from '../../constants/Colors'


export default function StartNewTripCard() {
  return (
    <View
    style={{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',
        gap:25
    }}
    >
        <Ionicons name="location-sharp" size={30} color="black" />
     <Text style={{
        fontFamily:'outfit Bold',
        fontSize:25,
        marginTop:10
     }}>
        No Trip Added Yet
     </Text>

     <Text style={{
        fontFamily:'outfit',
        fontSize:20,
        marginTop:10,
        textAlign:'center',
        color:Colors.Gray
     }}>
        Looks like its time to plan a new travel experinece! Get Started below
     </Text>

     <TouchableOpacity
     style={{
        padding:15,
        backgroundColor:Colors.Primary,
        borderRadius:15,
        paddingHorizontal:30
     }}
     >
        <Text
        style={{
            color:Colors.White,
            fontFamily:'outfit Medium',
            fontSize:17
        }}
        >Start New Trip</Text>
     </TouchableOpacity>

    </View>
  );
}
