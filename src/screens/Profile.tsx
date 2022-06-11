import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import TopDrawerNavigation from '../components/TopDrawerNavigation';
import Menu from '../components/Menu';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <TopDrawerNavigation />

      <Text style={styles.screenTitle}>Profile</Text>

      <Text>Name: John Doe</Text>

      <TouchableOpacity>
        <Text>Edit Profile</Text>
      </TouchableOpacity>

      <Menu />
    </View>
  );
};

export default ProfileScreen;

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
