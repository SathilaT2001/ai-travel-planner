import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext } from 'react';
import { CreateTripContext } from '../../context/CreateTripContex';
import moment from 'moment';

export default function ReviewTrip() {
    const navigation=useNavigation();
    const {tripData,setTripData}=useContext(CreateTripContext)

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[]);
  return (
    <View style={{
        paddingTop:55,
        padding:25,
        backgroundColor:Colors.White,
        height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit Bold',
        fontSize:30,
        marginTop:20
      }}>ReviewTrip</Text>

      <View style={{
        marginTop:20
      }}>
        <Text style={{
        fontFamily:'outfit Bold',
        fontSize:20,
        }}>
            Before generating your trip, pleace review your selection
        </Text>

{/* Destination Info */}
        <View style={{
            marginTop:40,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
        <Text style={{
            fontSize:30
        }}>📍</Text>
        <View>
            <Text style={{
                fontFamily:'outfit',
                fontSize:20,
                color:Colors.Gray
            }}>Destination</Text>
            <Text style={{
                fontFamily:'outfit Medium',
                fontSize:18
            }}>{tripData?.locationInfo?.name}</Text>
        
            
        </View>
        </View>

 {/* Date Info */}
        <View style={{
            marginTop:25,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
        <Text style={{
            fontSize:30
        }}>🗓️</Text>
        <View>
            <Text style={{
                fontFamily:'outfit',
                fontSize:20,
                color:Colors.Gray
            }}>Travel Date</Text>
            <Text style={{
                fontFamily:'outfit Medium',
                fontSize:18
            }}>{moment (tripData?.setDate).format('DD MMM')
            +" To "+
            moment(tripData?.endDate).format('DD MMM')+"   "}
            ( {tripData.totalNoOfDays} days )
            </Text>
        
            
        </View>
        </View>

{/* Traveles Info */}
        <View style={{
            marginTop:25,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
        <Text style={{
            fontSize:30
        }}>🚌</Text>
        <View>
            <Text style={{
                fontFamily:'outfit',
                fontSize:20,
                color:Colors.Gray
            }}>Who is Travelling</Text>
            <Text style={{
                fontFamily:'outfit Medium',
                fontSize:18
            }}>{tripData.traveler?.title}
            </Text>
        
            
        </View>
        </View>

{/* Budget Info */}
        <View style={{
            marginTop:25,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
        <Text style={{
            fontSize:30
        }}>💵</Text>
        <View>
            <Text style={{
                fontFamily:'outfit',
                fontSize:20,
                color:Colors.Gray
            }}>Budget</Text>
            <Text style={{
                fontFamily:'outfit Medium',
                fontSize:18
            }}>{tripData.budget}
            </Text>
        
            
        </View>
        </View>
        
      </View>

      <TouchableOpacity
        //    onPress={() => onClickContinue()}
      style={{
        padding:20,
        backgroundColor:Colors.Primary,
        borderRadius:15,
        marginTop:60
      }}>
        
        <Text style={{
          textAlign:'center',
          color:Colors.White,
          fontFamily:'outfit Medium',
          fontSize:20
        }}>Build My Trip</Text>
      </TouchableOpacity>

    </View>
  )
}