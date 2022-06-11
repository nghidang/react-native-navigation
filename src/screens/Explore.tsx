import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ExploreStackParams} from '../navigator/AppNavigator';
import TopDrawerNavigation from '../components/TopDrawerNavigation';
import Menu from '../components/Menu';
import RestaurantCard from '../components/RestaurantCard';

type Props = NativeStackScreenProps<ExploreStackParams, 'Restaurant'>;

const ExploreScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <TopDrawerNavigation />

      <Text style={styles.screenTitle}>Explore</Text>

      <View>
        <Text style={styles.sectionTitle}>Restaurants Near You</Text>
        <RestaurantCard
          name="Sushi restaurant"
          onPress={() => {
            navigation.push('Restaurant', {name: 'Sushi restaurant'});
          }}
        />
        <RestaurantCard
          name="Burger restaurant"
          onPress={() => {
            navigation.push('Restaurant', {name: 'Burger restaurant'});
          }}
        />
        <RestaurantCard
          name="Fine dining restaurant"
          onPress={() => {
            navigation.push('Restaurant', {name: 'Fine dining restaurant'});
          }}
        />

        <Text style={styles.sectionTitle}>Most Popular Restaurants</Text>
        <RestaurantCard
          name="Sushi restaurant"
          onPress={() => {
            navigation.push('Restaurant', {name: 'Sushi restaurant'});
          }}
        />
        <RestaurantCard
          name="Burger restaurant"
          onPress={() => {
            navigation.push('Restaurant', {name: 'Burger restaurant'});
          }}
        />
      </View>

      <Menu />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  restaurantCard: {
    backgroundColor: '#efefef',
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});
