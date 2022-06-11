import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/core';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import {RootParams} from '../navigator/AppNavigator';

const Menu = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootParams>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ExploreStack');
        }}>
        <Text style={styles.link}>Explore</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('RestaurantsStack');
        }}>
        <Text style={styles.link}>Restaurants</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginTop: 8,
  },
  link: {
    fontSize: 16,
    marginTop: 4,
    color: '#097ade',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  },
});
