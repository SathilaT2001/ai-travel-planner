import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from '../../constants/Colors'
import { useRouter } from 'expo-router';


export default function StartNewTripCard() {

    const router=useRouter();

  return (
    <View
    style={{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',
        gap:25,
        borderWidth:1,
        borderRadius:20,
        borderColor: Colors.Gray,
        
    }}
    >
        <Ionicons style={{
         marginTop:20
        }} name="location-sharp" size={40} color="red" />
     <Text style={{
        fontFamily:'outfit Bold',
        fontSize:25,
        marginTop:5
     }}>
        No Trip Added Yet
     </Text>

     <Text style={{
        fontFamily:'outfit',
        fontSize:20,
        marginTop:5,
        textAlign:'center',
        color:Colors.Gray
     }}>
        Looks like its time to plan a new travel experinece! Get Started below
     </Text>

     <TouchableOpacity
     onPress={() => router.push('/create-trip/search-place')}
     style={{
        padding:15,
        backgroundColor:Colors.Primary,
        borderRadius:15,
        paddingHorizontal:30,
        marginBottom:15
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
