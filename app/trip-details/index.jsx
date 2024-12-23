import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import moment from 'moment';
import FlightInfo from '../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';
import PlannedTrip from '../../components/TripDetails/PlannedTrip';
import { fetchImageFromPixabay } from '../../configs/pixabayApi';

export default function TripDetails() {
    const navigation = useNavigation();
    const { trip } = useLocalSearchParams();
    const [tripDetails, setTripDetails] = useState({});
    const [destinationImage, setDestinationImage] = useState('');
    const [loading, setLoading] = useState(true);

    const formatData = (data) => {
        try {
            return typeof data === 'string' ? JSON.parse(data) : data;
        } catch (error) {
            console.error('Failed to parse JSON:', error);
            return {}; 
        }
    };

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        });

        if (trip) {
            const parsedTrip = formatData(trip);
            setTripDetails(parsedTrip);

            // Fetch destination image
            const destinationName =
                parsedTrip?.tripPlan?.trip_details?.destination;
            if (destinationName) {
                fetchImageFromPixabay(destinationName)
                    .then((url) => {
                        setDestinationImage(url);
                    })
                    .catch((err) => {
                        console.error('Error fetching Pixabay image:', err);
                    })
                    .finally(() => setLoading(false));
            } else {
                setLoading(false);
            }
        }
    }, [trip, navigation]);

    return (
        <ScrollView style={{ flex: 1 }}>
            {/* Displaying Image */}
            {loading ? (
                <ActivityIndicator size="large" color={Colors.Primary} />
            ) : (
                <Image
                    source={{
                        uri:
                            destinationImage ||
                            require('./../../assets/images/login.png'),
                    }}
                    style={{
                        width: '100%',
                        height: 330,
                        objectFit: 'cover',
                    }}
                />
            )}

            {/* Trip details */}
            <View
                style={{
                    padding: 15,
                    backgroundColor: Colors.White,
                    height: '100%',
                    marginTop: -30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                }}
            >
                <Text
                    style={{
                        fontFamily: 'outfit Bold',
                        fontSize: 25,
                    }}
                >
                    {tripDetails?.tripPlan?.trip_details?.destination ||
                        'Unknown Destination'}
                </Text>

                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 10,
                        marginTop: 5,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'outfit',
                            fontSize: 18,
                            color: Colors.Gray,
                        }}
                    >
                        {moment(
                            formatData(tripDetails?.tripData)?.startDate
                        ).format('DD MMM YYYY')}
                    </Text>

                    <Text
                        style={{
                            fontFamily: 'outfit',
                            fontSize: 18,
                            color: Colors.Gray,
                        }}
                    >
                        -{' '}
                        {moment(
                            formatData(tripDetails?.tripData)?.endDate
                        ).format('DD MMM YYYY')}
                    </Text>
                </View>
                <Text
                    style={{
                        fontFamily: 'outfit',
                        fontSize: 17,
                        color: Colors.Gray,
                    }}
                >
                    🚌{' '}
                    {formatData(tripDetails?.tripData)?.traveler?.title ||
                        'Unknown Traveler'}
                </Text>

                {/* Flight Info */}
                <FlightInfo flightData={tripDetails?.tripPlan?.flight_details} />

                {/* Hotels Info */}
                <HotelList hotelList={tripDetails?.tripPlan?.hotels} />

                {/* Day Planner Info */}
                <PlannedTrip details={tripDetails?.tripPlan?.itinerary || []} />
            </View>
        </ScrollView>
    );
}
