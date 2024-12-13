import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { fetchImageFromPixabay } from './../../configs/pixabayApi';

export default function PlannedTrip({ details }) {
  const [images, setImages] = useState({});  // State to store images

  // Function to fetch image from Pixabay API
  const getImage = async (placeName, index) => {
    try {
      const imageUrl = await fetchImageFromPixabay(placeName);
      
      // Check if imageUrl is a valid string
      if (typeof imageUrl === 'string' && imageUrl.trim() !== '') {
        setImages(prevImages => ({ ...prevImages, [index]: imageUrl }));
      } else {
        // If not valid, log or use a fallback image
        console.error('Invalid image URL for', placeName);
        setImages(prevImages => ({ ...prevImages, [index]: 'https://via.placeholder.com/200' }));  
      }
    } catch (error) {
      console.error("Error fetching image for", placeName, error);
      setImages(prevImages => ({ ...prevImages, [index]: 'https://via.placeholder.com/200' }));  
    }
  };

  
  useEffect(() => {
    details.forEach((dayDetails, dayIndex) => {
      dayDetails.plan.forEach((place, placeIndex) => {
        
        getImage(place.name, `${dayIndex}-${placeIndex}`);
      });
    });
  }, [details]);

  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ fontFamily: 'outfit Bold', fontSize: 20 }}>
        🏕️ Trip Details
      </Text>

      <ScrollView style={{ marginTop: 5 }}>
        {Object.entries(details).map(([day, details]) => (
          <View key={day}>
            <Text style={{
                fontFamily: 'outfit Bold',
                fontSize: 20,
                marginTop: 10,
              }}>
              {`Day ${parseInt(day) + 1}`}  
            </Text>

            
            {details.plan.map((place, index) => (
              <View style={{
                  marginTop: 10,
                  backgroundColor: Colors.LIGHT_GRAY,
                  padding: 10,
                  borderRadius: 15,
                  borderColor: Colors.Gray,
                }} key={index}>
                
                {/* Display image for the place */}
                <Image
                  source={{
                    uri: images[`${day}-${index}`] || 'https://via.placeholder.com/200',  
                  }}
                  style={{
                    width: '100%',
                    height: 200,
                    marginTop: 2,
                    borderRadius: 15,
                    objectFit: 'cover',
                  }}
                />

                <View style={{
                  marginTop: 10,
                }}>
                  <Text style={{
                    fontFamily: 'outfit Bold',
                    fontSize: 20,
                  }}>
                    {place?.name}
                  </Text>
                  <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 17,
                    color: Colors.Gray,
                  }}>
                    {place.details}
                  </Text>

                  <View style={{
                    paddingRight: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <View>
                      <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 17,
                        marginTop: 5,
                      }}>
                        🎟️ Ticket Price: <Text style={{ fontFamily: 'outfit Bold' }}>
                          {place.ticket_price}
                        </Text>
                      </Text>

                      <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 17,
                        marginTop: 5,
                      }}>
                        🕧 Time to Travel: <Text style={{ fontFamily: 'outfit Bold' }}>
                          {place.time_to_travel}
                        </Text>
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Colors.Primary,
                        padding: 7,
                        borderRadius: 7,
                      }}
                    >
                      <Ionicons name="navigate" size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
