import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { fetchImageFromPixabay } from './../../configs/pixabayApi';

export default function HotelList({ hotelList }) {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      const newImages = {};
      for (let hotel of hotelList) {
        if (hotel?.name) {
          const imageUrl = await fetchImageFromPixabay(hotel.name); 
          newImages[hotel.name] = imageUrl;
        }
      }
      setImages(newImages);
      setLoading(false); 
    };

    loadImages();
  }, [hotelList]);


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
            <Image
                source={images[item?.name] ? { uri: images[item?.name] } : require('./../../assets/images/login.png')}
                style={{
                  marginTop: 10,
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
