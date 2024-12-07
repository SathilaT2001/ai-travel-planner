import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from './../../constants/Colors'



export default function TabLayout() {
    return (
      <Tabs
        screenOptions={{
          headerShown: false, // Apply to all tabs
          tabBarActiveTintColor:Colors.Primary, // Customize active tab color
          tabBarInactiveTintColor: "#808080", // Customize inactive tab color
          tabBarStyle: {
            backgroundColor: "#f8f9fa", // Tab bar background color
          },
        }}
      >
        <Tabs.Screen
        name="mytrip"
        options={{
          tabBarLabel:'My Trip',
          tabBarIcon:({color})=><Ionicons name="location-sharp" size={24} color={color} />
        }}
      />
        <Tabs.Screen name="discover"
        options={{
            tabBarLabel:'Discover',
            tabBarIcon:({color})=><Ionicons name="globe-sharp" size={24} color={color} />
          
          }}
        />
        <Tabs.Screen name="profile" 
        options={{
            tabBarLabel:'Profile',
            tabBarIcon:({color})=><Ionicons name="people-circle-sharp" size={24} color={color} />
          
          }}
        />
      </Tabs>
    );
  }