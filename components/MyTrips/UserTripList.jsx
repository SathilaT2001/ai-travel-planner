import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment';
import { Colors } from './../../constants/Colors';
import UserTripCard from './UserTripCard';


export default function UserTripList({userTrips}) {
    const LatestTrip=JSON.parse(userTrips[0].tripData)
    
  return (
    <View>
      <View style={{
        marginTop:20
      }} >
        
        {/* {LatestTrip?.locationInfo.photoRef?
        <Image source={{uri:'https://google-map-places.p.rapidapi.com/maps/api/place/photo?photo_reference='+LatestTrip.locationInfo?.photoRef+
          '&key='+process.env.RAPID_API_KEY}}
          style={{
            width:'100%',
            height:240,
            objectFit:'cover',
            borderRadius:15
          }}
          />   */}
          :
        <Image source={require('./../../assets/images/login.png')}
        style={{
            width:'100%',
            height:240,
            objectFit:'cover',
            borderRadius:15
        }} />
        <View> 
            <Text style={{
              fontFamily:'outfit Bold',
              fontSize:24,
              marginTop:10
            }} >{LatestTrip.locationInfo.name} </Text>
        <View style={{
          paddingLeft:2,
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          marginTop:5
        }} >
            <Text style={{
              fontFamily:'outfit',
              fontSize:17,
              color:Colors.Gray
            }} >{moment(LatestTrip.startDate).format('DD MMM YYYY')} </Text>

            <Text style={{
              fontFamily:'outfit',
              fontSize:17,
              color:Colors.Gray
            }} >🚌{LatestTrip.traveler.title} </Text>
        </View>
        <TouchableOpacity style={{
          backgroundColor:Colors.Primary,
          padding:15,
          borderRadius:15,
          marginTop:10
        }}>
          <Text style={{
            color:Colors.White,
            textAlign:'center',
            fontFamily:'outfit Medium',
            fontSize:15
          }}> See your Plan </Text>
        </TouchableOpacity>
        </View>

        {userTrips.map((trip,index)=>(
         <UserTripCard trip={trip} key={index} />
        ))}
      </View>
    </View>
  )
}