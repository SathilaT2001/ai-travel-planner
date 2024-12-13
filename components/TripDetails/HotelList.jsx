import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../../constants/Colors';
import { fetchImageFromPixabay } from './../../configs/pixabayApi';

export default function HotelList({ hotelList }) {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Array.isArray(hotelList)) {
      console.error("Expected 'hotelList' to be an array, but got:", hotelList);
      return;
    }

    const loadImages = async () => {
      const newImages = {};
      for (let hotels of hotelList) {
        if (hotels?.name) {
          const imageUrl = await fetchImageFromPixabay(hotels.name);
          newImages[hotels.name] = imageUrl;
        }
      }
      setImages(newImages);
      setLoading(false);
    };

    if (hotelList?.length) {
      loadImages();
    } else {
      setLoading(false);  
    }
  }, [hotelList]);

  
  if (!Array.isArray(hotelList) || hotelList.length === 0) {
    return <Text>No hotels available.</Text>;
  }

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: 'outfit Bold', fontSize: 20 }}>🏩 Hotel Recommendations</Text>

      <FlatList
        data={hotelList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20, width: 180 }}>
            {loading ? (
              <ActivityIndicator size="large" color={Colors.Primary} />
            ) : (
              <Image
                source={images[item?.name] ? { uri: images[item?.name] } : require('./../../assets/images/login.png')}
                style={{
                  marginTop: 10,
                  width: 180,
                  height: 120,
                  borderRadius: 15,
                }}
              />
            )}
            <Text style={{ 
              fontFamily: 'outfit Medium',
              fontSize: 17,
              marginTop: 5 }}>{item?.name}</Text>

            <View style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              paddingRight: 10 }}>

              <Text style={{ fontFamily: 'outfit Medium', 
                fontSize: 15, 
                marginTop: 5 }}>⭐ {item?.rating}</Text>

              <Text style={{ fontFamily: 'outfit Medium', 
                fontSize: 15, 
                marginTop: 5 }}>💵 {item?.price}</Text>

            </View>
          </View>
        )}
      />
    </View>
  );
}
