import { View, Text, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce'; // Import debounce
import { Colors } from './../../constants/Colors';
import { useNavigation, useRouter } from 'expo-router';
import { CreateTripContext } from './../../context/CreateTripContex';

export default function SearchPlace() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);
  let cancelToken;

  // Update navigation options
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search',
    });
  }, [navigation]);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  // Fetch suggestions from RapidAPI
  const fetchSuggestions = async (query) => {
    if (!query || query.length < 3) {
      // Skip fetching if query is empty or too short
      setSuggestions([]);
      return;
    }

    setLoading(true);

    // Cancel the previous API request if it's still ongoing
    if (cancelToken) {
      cancelToken.cancel('Operation canceled due to new request.');
    }

    cancelToken = axios.CancelToken.source();

    const options = {
      method: 'GET',
      url: 'https://place-autocomplete1.p.rapidapi.com/autocomplete/json',
      params: {
        input: query,
        radius: '500',
      },
      headers: {
        'x-rapidapi-key': '45e6271b49msh02064a264dbc139p15c911jsnb36740740f5b',
        'x-rapidapi-host': 'place-autocomplete1.p.rapidapi.com',
      },
      cancelToken: cancelToken.token,
    };

    try {
      const response = await axios.request(options);
      setSuggestions(response.data.predictions || []);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
      } else {
        console.error(error);
        Alert.alert('Error', 'Failed to fetch suggestions. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Debounced version of fetchSuggestions
  const debouncedFetchSuggestions = debounce(fetchSuggestions, 500);

  // Fetch place details using place_id
  const fetchPlaceDetails = async (place_id) => {
    const options = {
      method: 'GET',
      url: 'https://google-map-places.p.rapidapi.com/maps/api/place/details/json',
      params: {
        place_id,
        region: 'en',
        fields: 'all',
        language: 'en',
        reviews_no_translations: 'true',
      },
      headers: {
        'x-rapidapi-key': 'a19a5f5db7msh679b97480f1b148p1b1a5ejsn43bf75d46f97',
        'x-rapidapi-host': 'google-map-places.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const details = response.data.result;
      setTripData({
        locationInfo: {
          name: details.name,
          coordinate: details.geometry?.location,
          photoRef: details.photos?.[0]?.photo_reference,
          url: details.url,
        },
      });

      router.push('/create-trip/select-traveler');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to fetch place details. Please try again later.');
    }
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.White,
        flex: 1,
      }}
    >
      <TextInput
        style={{
          height: 44,
          borderColor: Colors.Gray,
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 10,
          marginBottom: 20,
        }}
        placeholder="Search Place"
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text);
          debouncedFetchSuggestions(text); // Use debounced function
        }}
      />
      {loading && <Text>Loading...</Text>}
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.place_id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 15,
              borderBottomWidth: 1,
              borderBottomColor: Colors.Gray,
            }}
            onPress={() => {
              fetchPlaceDetails(item.place_id); // Fetch details on selection
              // Alert.alert('Fetching Details', `Details for: ${item.description}`);
            }}
          >
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
