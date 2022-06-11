import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RestaurantsStackParams} from '../navigator/AppNavigator';
import TopDrawerNavigation from '../components/TopDrawerNavigation';
import Menu from '../components/Menu';
import RestaurantCard from '../components/RestaurantCard';

type Props = NativeStackScreenProps<RestaurantsStackParams, 'Restaurant'>;

const RestaurantsScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <TopDrawerNavigation />

      <Text style={styles.screenTitle}>Restaurants</Text>

      <ScrollView>
        <RestaurantCard
          name="Sushi restaurant"
          onPress={name => {
            navigation.push('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Burger restaurant"
          onPress={name => {
            navigation.push('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Fine dining restaurant"
          onPress={name => {
            navigation.push('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Sushi restaurant"
          onPress={name => {
            navigation.push('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Burger restaurant"
          onPress={name => {
            navigation.push('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Fine dining restaurant"
          onPress={name => {
            navigation.push('Restaurant', {name});
          }}
        />
      </ScrollView>

      <Menu />
    </View>
  );
};

export default RestaurantsScreen;

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
