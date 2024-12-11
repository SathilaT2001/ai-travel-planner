import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function PlannedTrip({ details }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{
        fontFamily: 'outfit Bold',
        fontSize: 20
      }}>🏕️  Trip Details</Text>

      <ScrollView style={{ marginTop: 10 }}>
        {details && details.map((day, index) => (
          <View key={index} style={{ marginBottom: 15 }}>
            <Text style={{
              fontFamily: 'outfit Bold',
              fontSize: 20,
              marginTop: 10
            }}>
              Day {day.day}: {day.plan ? '' : 'No Activities Planned'}
            </Text>

            
            {day.plan && day.plan.map((activity, idx) => (
              <View key={idx} style={{ 
                marginTop: 10,
                backgroundColor:Colors.LIGHT_GRAY,
                padding:10,
                borderRadius:15,
                borderColor:Colors.Gray,
                marginTop:20 
              }}
              >
                <Image source={require('./../../assets/images/login.png')}
                  style={{
                    width:'100%',
                    height:120,
                    borderRadius:15
                  }}
                />
                <View style={{
                  marginTop:5
                }}>
                <Text style={{
                  fontFamily: 'outfit Bold',
                  fontSize: 20,
                }}>{activity.name} </Text>
                </View>

                 <Text style={{
                  fontFamily: 'outfit',
                  fontSize: 17,
                  color:Colors.Gray
                }}>
                  {activity.details}
                </Text>
              <View style={{
                paddingRight:10,
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'
              }}>
              <View>
                <Text style={{
                  fontFamily: 'outfit',
                  fontSize: 17,
                  marginTop:5
                }}>
                  🎟️ Ticket Price: 
                  <Text style={{
                    fontFamily:'outfit Bold'
                  }}> {activity.ticket_price} </Text>
                </Text>
                
                <Text style={{
                  fontFamily: 'outfit',
                  fontSize: 17,
                  marginTop:5
                  
                }}>
                  🕧 Time to Travel:
                  <Text style={{
                    fontFamily:'outfit Bold'
                  }}> {activity.time_to_travel} </Text>    
                </Text>
              </View>
                  <TouchableOpacity style={{
                    backgroundColor:Colors.Primary,
                    padding:7,
                    borderRadius:7
                  }}>
                  <Ionicons name="navigate" size={20} color="white" />
                  </TouchableOpacity>
              </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
