import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function PlannedTrip({ itinerary }) {
  if (!Array.isArray(itinerary) || itinerary.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🏕️ Planned Trip</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏕️ Planned Trip</Text>
      {itinerary.map((dayDetails, index) => (
        <View key={index} style={styles.dayContainer}>
          {/* Display Day */}
          <Text style={styles.dayTitle}>Day {dayDetails.day}</Text>

          {/* List Activities */}
          {dayDetails.activities.map((activity, idx) => (
            <View key={idx} style={styles.activityContainer}>
              <Text style={styles.activityTime}>{activity.time}</Text>
              <Text style={styles.activityDescription}>{activity.activity}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 20,
  },
  title: {
    fontFamily: 'outfit Bold',
    fontSize: 20,
    marginBottom: 10,
  },
  noDataText: {
    fontFamily: 'outfit',
    fontSize: 16,
    color: '#555',
  },
  dayContainer: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  dayTitle: {
    fontFamily: 'outfit Bold',
    fontSize: 18,
    marginBottom: 10,
  },
  activityContainer: {
    marginBottom: 10,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#007AFF',
  },
  activityTime: {
    fontFamily: 'outfit Bold',
    fontSize: 16,
  },
  activityDescription: {
    fontFamily: 'outfit',
    fontSize: 15,
    color: '#555',
  },
});
