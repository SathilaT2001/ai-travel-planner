import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function FlightInfo({ flightData }) {
  return (
    <View style={{
        marginTop:20,
        backgroundColor:Colors.LIGHT_GRAY,
        padding:10,
        borderRadius:15,
        borderWidth:1,
        borderColor:Colors.LIGHT_GRAY
    }}>
        <View style={{
            paddingRight:10,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}>

        <Text style={{
            fontFamily: 'outfit Bold',
            fontSize: 20,
            marginTop:7
        }} >✈️  Flights</Text>

        <TouchableOpacity style={{
            backgroundColor:Colors.Primary,
            padding:5,
            borderRadius:5,
            width:100,
            marginTop:7
        }}>
            <Text style={{
                textAlign:'center',
                fontFamily:'outfit',
                color:Colors.White
            }}>Book Here</Text>
        </TouchableOpacity>
        </View>

        {/* Flight Info Details */}
        <Text style={{
            fontFamily: 'outfit',
            fontSize: 17,
            marginTop:7
        }}>Airline: {flightData?.airline || 'Unknown Airline'}</Text>

        <Text style={{
            fontFamily: 'outfit',
            fontSize: 17,
            marginTop:5
        }}>Price: {flightData?.flight_price || 'Unknown Price'}</Text>
    </View>
  )
}
