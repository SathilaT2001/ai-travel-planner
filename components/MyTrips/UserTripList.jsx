import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Colors } from './../../constants/Colors';
import UserTripCard from './UserTripCard';
import { useRouter } from 'expo-router';
import { fetchImageFromPixabay } from './../../configs/pixabayApi';

export default function UserTripList({ userTrips }) {
  const [latestTripImage, setLatestTripImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const LatestTrip = JSON.parse(userTrips[0].tripData);
  const router = useRouter();

  useEffect(() => {
    const loadImage = async () => {
      if (LatestTrip.locationInfo?.name) {
        const imageUrl = await fetchImageFromPixabay(LatestTrip.locationInfo.name);
        setLatestTripImage(imageUrl);
      }
      setLoading(false);
    };
    loadImage();
  }, [LatestTrip.locationInfo]);

  return (
    <View>
      <View style={{ marginTop: 20 }}>
        {/* Dynamic Image Section */}
        {loading ? (
          <ActivityIndicator size="large" color={Colors.Primary} />
        ) : (
          <Image
            source={
              latestTripImage
                ? { uri: latestTripImage }
                : { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgiHOxdrm2b-8ETUgU--CWHw7ZcLKDUvsF8w&s' }
            }
            style={{
              width: '100%',
              height: 240,
              objectFit: 'cover',
              borderRadius: 15,
            }}
          />
        )}

        <Text
          style={{
            fontFamily: 'outfit Bold',
            fontSize: 24,
            marginTop: 10,
          }}
        >
          {LatestTrip.locationInfo.name}
        </Text>

        <View
          style={{
            paddingLeft: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontFamily: 'outfit',
              fontSize: 14,
              color: Colors.Gray,
            }}
          >
            {moment(LatestTrip.startDate).format('DD MMM YYYY')}
          </Text>

          <Text
            style={{
              fontFamily: 'outfit',
              fontSize: 17,
              color: Colors.Gray,
            }}
          >
            🚌 {LatestTrip.traveler.title}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: '/trip-details',
              params: {
                trip: JSON.stringify(userTrips[0]),
              },
            })
          }
          style={{
            backgroundColor: Colors.Primary,
            padding: 15,
            borderRadius: 15,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: Colors.White,
              textAlign: 'center',
              fontFamily: 'outfit Medium',
              fontSize: 15,
            }}
          >
            See your Plan
          </Text>
        </TouchableOpacity>
      </View>

      {/* Render User Trip Cards */}
      {userTrips.map((trip, index) => (
        <UserTripCard trip={trip} key={index} />
      ))}
    </View>
  );
}
