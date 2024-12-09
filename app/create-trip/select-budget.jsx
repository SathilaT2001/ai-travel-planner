import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { SelectBudgetOption } from '../../constants/Options';
import OptionCard from './../../components/CreateTrip/OptionCard'
import { Colors } from '../../constants/Colors';
import { useContext } from 'react';
import { CreateTripContext } from '../../context/CreateTripContex';

export default function SelectBudget() {

    const navigation=useNavigation();
    const [selectedOption,setSelectedOption]=useState();
    const { tripData, setTripData } = useContext(CreateTripContext);
    const router=useRouter();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[]);

    useEffect(()=>{
        selectedOption&&setTripData({
            ...tripData,
            budget:selectedOption?.title
        })
    },[selectedOption])

    const onClickContinue=()=>{
        if(!selectedOption)
        {
            ToastAndroid.show('Select Your Budget',ToastAndroid.LONG)
            return;
        }

        router.push('/create-trip/review-trip');
    }

  return (
    <View style={{
        paddingTop:55,
        padding:25,
        backgroundColor:Colors.White,
        height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit Bold',
        fontSize:35,
        marginTop:20
      }}>Budget</Text>

      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontFamily:'outfit Bold',
            fontSize:20
        }}>Choose spending habit for your trip</Text>


        <FlatList
        data={SelectBudgetOption}
        renderItem={({item,index})=>(
            <TouchableOpacity style={{
                marginVertical:10
            }}
            onPress={()=>{setSelectedOption(item)}}
            >
                <OptionCard option={item} selectedOption={selectedOption} />
            </TouchableOpacity>
        )}
        />
      </View>

      <TouchableOpacity
           onPress={() => onClickContinue()}
      style={{
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