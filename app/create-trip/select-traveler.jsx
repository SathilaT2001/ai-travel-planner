import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "expo-router";
import { useEffect } from 'react';
import { Colors } from './../../constants/Colors';
import { SelectTravelesList } from './../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { useState } from 'react';
import { useContext } from 'react';
import { CreateTripContext } from '../../context/CreateTripContex';


export default function SelectTraveler() {

const navigation=useNavigation();
const [selectedTraveler,setSelectedTraveler]=useState();
const { tripData, setTripData } = useContext(CreateTripContext);



useEffect(()=>{
  navigation.setOptions({
    headerShown:true,
    headerTransperent:true,
    headerTitle:''
  })
})

useEffect(()=>{
  setTripData({...tripData,
    traveler:selectedTraveler
  })
},[selectedTraveler]);

useEffect(()=>{
  console.log(tripData);
},[tripData]);


  return (
    <View style={{
      padding:20,    
      paddingTop:10,
      backgroundColor: Colors.White,
      height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit Bold',
        fontSize:35,
        marginTop:20
      }}>Who's travelling</Text>

      <View style={{
        marginTop:20
      }}>
        <Text style={{
          fontFamily:'outfit Bold',
          fontSize:20
        }}>Choose your traveles</Text>

        <FlatList
          data={SelectTravelesList}
          renderItem={({item,index})=>(
            <TouchableOpacity 
            onPress={()=>setSelectedTraveler(item)}
            style={{
              marginVertical:10
            }}>
               <OptionCard option={item} selectedTraveler={selectedTraveler}/>


            </TouchableOpacity>

          )}  
        />

      </View>

      <TouchableOpacity style={{
        padding:20,
        backgroundColor:Colors.Primary,
        borderRadius:15,
        marginTop:20
      }}>
        <Text style={{
          textAlign:'center',
          color:Colors.White,
          fontFamily:'outfit Medium',
          fontSize:20
        }}>Continue</Text>
      </TouchableOpacity>

    </View>
  )
}