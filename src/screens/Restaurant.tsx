import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RestaurantsStackParams} from '../navigator/AppNavigator';
import TopBackNavigation from '../components/TopBackNavigation';
import RestaurantCard from '../components/RestaurantCard';

type Props = NativeStackScreenProps<RestaurantsStackParams, 'Restaurant'>;

const RestaurantScreen = ({route}: Props) => {
  return (
    <View style={styles.container}>
      <TopBackNavigation />

      <Text style={styles.screenTitle}>{route.params.name}</Text>

      <Text>Related restaurants</Text>
      <RestaurantCard
        name="Restaurant 1"
        onPress={() => {
          // navigation.push('Restaurant', {name: 'Sushi 1'});
        }}
      />
      <RestaurantCard
        name="Restaurant 2"
        onPress={() => {
          // navigation.push('Restaurant', {name: 'Sushi 2'});
        }}
      />
      <RestaurantCard
        name="Restaurant 3"
        onPress={() => {
          // navigation.push('Restaurant', {name: 'Sushi 3'});
        }}
      />
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});
