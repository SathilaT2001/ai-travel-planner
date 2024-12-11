import { View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Colors } from '../../constants/Colors';
import { fetchImageFromPixabay } from './../../configs/pixabayApi';
import { useRouter } from 'expo-router';

export default function UserTripCard({ trip }) {
  const [destinationImage, setDestinationImage] = useState(null);
  const [loading, setLoading] = useState(true);
  

  const formatData = (data) => {
    return JSON.parse(data);
  };

  const destination = trip?.tripPlan?.travel_plan_details?.destination || 'Unknown Destination';

  useEffect(() => {
    const loadImage = async () => {
      if (destination !== 'Unknown Destination') {
        const imageUrl = await fetchImageFromPixabay(destination);
        setDestinationImage(imageUrl);
      }
      setLoading(false);
    };

    loadImage();
  }, [destination]);

  return (
    <TouchableOpacity>
    <View
      style={{
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
      }}
    >
      {loading ? (
        <ActivityIndicator size="large" color={Colors.Primary} />
      ) : (
        <Image
          source={
            destinationImage
              ? { uri: destinationImage }
              : require('./../../assets/images/login.png') // Fallback image
          }
          style={{
            width: 100,
            height: 100,
            objectFit: 'cover',
            borderRadius: 15,
          }}
        />
      )}
      <View>
        <Text
          style={{
            fontFamily: 'outfit Medium',
            fontSize: 20,
          }}
        >
          {destination}
        </Text>
        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 14,
            color: Colors.Gray,
          }}
        >
          {moment(formatData(trip.tripData).startDate).format('DD MMM YYYY')}
        </Text>
        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 14,
            color: Colors.Gray,
          }}
        >
          Travelling: {formatData(trip.tripData).traveler.title}
        </Text>
      </View>
    </View>
    </TouchableOpacity>
  );
}
