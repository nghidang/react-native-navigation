import {StyleSheet, View, TouchableHighlight} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/core';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import {RootParams} from '../navigator/AppNavigator';
import DrawerMenuIcon from '../icons/DrawerMenuIcon';

const TopDrawerNavigation = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootParams>>();

  const isDrawer = 'openDrawer' in navigation;

  return !isDrawer ? null : (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#f0ddcc"
        onPress={() => {
          navigation.openDrawer();
        }}>
        <DrawerMenuIcon color="#333" size={20} />
      </TouchableHighlight>
    </View>
  );
};

export default TopDrawerNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  backButton: {
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
