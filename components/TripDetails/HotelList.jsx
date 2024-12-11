import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function HotelList({ hotelList }) {
  return (
    <View style={{
        marginTop:20,
        
        }}>
      <Text style={{
        fontFamily: 'outfit Bold',
        fontSize: 20
      }}>🏩  Hotel Recommendations</Text>

      <FlatList
        data={hotelList}
        stickyHeaderHiddenOnScroll={{
            marginTop:8
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item, index }) => (
          <View style={{
            marginRight:20,
            width:180
          }}>
            <Image source={require('./../../assets/images/login.png')}
            //   source={{ uri: item?.hotel_image_url }}
              style={{
                marginTop:10,
                width: 180,
                height: 120,
                borderRadius: 15
                
              }} 
            />
            <Text style={{
              fontFamily: 'outfit Medium',
              fontSize: 17,
              marginTop:5
            }}>{item?.name}</Text>

          <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            paddingRight:10
          }}>
            <Text style={{
              fontFamily: 'outfit Medium',
              fontSize: 15,
              marginTop:5
            }}>⭐ {item?.rating}</Text>

            <Text style={{
              fontFamily: 'outfit Medium',
              fontSize: 15,
              marginTop:5
            }}>💵 {item?.price}</Text>
          </View>
            
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}
