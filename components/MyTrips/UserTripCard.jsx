import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment';
import { Colors } from '../../constants/Colors';

export default function UserTripCard({trip}) {
    const formatData=(data)=>{
        return JSON.parse(data);
    }
  return (
    <View style={{
      
      marginTop:20,
      display:'flex',
      flexDirection:'row',
      gap:10,
      alignItems:'center'
    }}>
      <Image source={require('./../../assets/images/login.png')}
        style={{
            width:100,
            height:100,
            objectFit:'cover',
            borderRadius:15,
            
        }} />
        <View>
            <Text style={{
              fontFamily:'outfit Medium',
              fontSize:20
            }}> {trip.tripPlan?.travel_plan?.destination}  </Text>
            <Text style={{
              fontFamily:'outfit',
              fontSize:14,
              color:Colors.Gray
            }}> {moment(formatData(trip.tripData).startDate).format('DD MMM YYYY')}  </Text>
            <Text style={{
              fontFamily:'outfit',
              fontSize:14,
              color:Colors.Gray
            }}> Travelling: {formatData(trip.tripData).traveler.title}  </Text>
        </View>
    </View>
  )
}