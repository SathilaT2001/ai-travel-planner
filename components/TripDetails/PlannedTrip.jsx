import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { fetchImageFromPixabay } from './../../configs/pixabayApi';

export default function PlannedTrip({ details }) {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = details.flatMap((day) =>
        day.plan.map(async (activity) => {
          if (activity?.placeName) {
            const imageUrl = await fetchImageFromPixabay(activity.placeName);
            return { placeName: activity.placeName, imageUrl };
          }
          return null;
        })
      );

      const resolvedImages = await Promise.all(imagePromises);
      const imageMap = resolvedImages.reduce((acc, curr) => {
        if (curr) acc[curr.placeName] = curr.imageUrl;
        return acc;
      }, {});

      setImages(imageMap);
      setLoading(false);
    };

    loadImages();
  }, [details]);

  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          fontFamily: 'outfit Bold',
          fontSize: 20,
        }}
      >
        🏕️ Trip Details
      </Text>

      <ScrollView style={{ marginTop: 10 }}>
        {details &&
          details.map((day, index) => (
            <View key={index} style={{ marginBottom: 15 }}>
              <Text
                style={{
                  fontFamily: 'outfit Bold',
                  fontSize: 20,
                  marginTop: 10,
                }}
              >
                Day {day.day}: {day.plan ? '' : 'No Activities Planned'}
              </Text>

              {day.plan &&
                day.plan.map((activity, idx) => (
                  <View
                    key={idx}
                    style={{
                      marginTop: 10,
                      backgroundColor: Colors.LIGHT_GRAY,
                      padding: 10,
                      borderRadius: 15,
                      borderColor: Colors.Gray,
                    }}
                  >
                    {loading ? (
                      <ActivityIndicator size="large" color={Colors.Primary} />
                    ) : (
                      <Image
                        source={
                          images[activity.placeName]
                            ? { uri: images[activity.placeName] }
                            : require('./../../assets/images/login.png') 
                        }
                        style={{
                          width: '100%',
                          height: 200,
                          marginTop: 10,
                          borderRadius: 10,
                          objectFit: 'cover',
                        }}
                      />
                    )}
                    <View style={{ marginTop: 5 }}>
                      <Text
                        style={{
                          fontFamily: 'outfit Bold',
                          fontSize: 20,
                        }}
                      >
                        {activity.placeName}
                      </Text>
                    </View>

                    <Text
                      style={{
                        fontFamily: 'outfit',
                        fontSize: 17,
                        color: Colors.Gray,
                      }}
                    >
                      {activity.placeDetails}
                    </Text>
                    <View
                      style={{
                        paddingRight: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontFamily: 'outfit',
                            fontSize: 17,
                            marginTop: 5,
                          }}
                        >
                          🎟️ Ticket Price:{' '}
                          <Text
                            style={{
                              fontFamily: 'outfit Bold',
                            }}
                          >
                            {activity.ticketPricing}
                          </Text>
                        </Text>

                        <Text
                          style={{
                            fontFamily: 'outfit',
                            fontSize: 17,
                            marginTop: 5,
                          }}
                        >
                          🕧 Time to Travel:{' '}
                          <Text
                            style={{
                              fontFamily: 'outfit Bold',
                            }}
                          >
                            {activity.timeToTravel}
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
                ))}
            </View>
          ))}
      </ScrollView>
    </View>
  );
}
