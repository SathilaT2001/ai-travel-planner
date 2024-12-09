import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router, useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';
import { useContext } from 'react';
import { CreateTripContext } from '../../context/CreateTripContex';


export default function SelectDates() {

  const navigation = useNavigation();
  const [startDate,setstartDate]=useState();
  const [endDate,setendDate]=useState();
  const { tripData, setTripData } = useContext(CreateTripContext);


  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });

  }, [navigation]);

  const onDateChange=(date,type)=>{
      console.log(date,type);
      if(type=='START_DATE')
      {
        setstartDate(moment(date));
      }
      else{
        setendDate(moment(date));
      }
  }
  const OnDateSelectionContinue=()=>{

    if (!startDate.isValid() || !endDate.isValid()) {
      ToastAndroid.show('Please Select Start and End Dates', ToastAndroid.LONG);
      return;
    }
    const totalNoOfDays=endDate.diff(startDate,'days');
    console.log(totalNoOfDays+1);
    setTripData({
      ...tripData,
      startDate:startDate,
      endDate:endDate,
      totalNoOfDays:totalNoOfDays+1
    });
  } 


  // const handleDateChange = (date, type) => {
  //   if (type === 'START_DATE') {
  //     setSelectedStartDate(date);
  //   } else if (type === 'END_DATE') {
  //     setSelectedEndDate(date);
  //   }
  // };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 10,
        backgroundColor: Colors.White,
        height: '100%',
      }}
    >
      <Text
        style={{
          fontFamily: 'outfit Bold',
          fontSize: 35,
          paddingTop:20,
          marginTop: 30,
        }}
      >
        Travel Dates
      </Text>

      <View style={{ 
        marginTop: 20, 
        
        }}>
        <CalendarPicker 
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={4}
          selectedRangeStyle={{
            backgroundColor:Colors.Primary
          }}
          selectedDayTextStyle={{
            color:Colors.White
          }}
        />
      </View>

      <TouchableOpacity
           onPress={OnDateSelectionContinue}
      style={{
        padding:20,
        backgroundColor:Colors.Primary,
        borderRadius:15,
        marginTop:35
      }}>
        
        <Text style={{
          textAlign:'center',
          color:Colors.White,
          fontFamily:'outfit Medium',
          fontSize:20
        }}>Continue</Text>
      </TouchableOpacity>
      
    </View>
  );
}
