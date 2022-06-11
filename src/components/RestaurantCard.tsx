import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  name: string;
  onPress: (name: string) => void;
};

const RestaurantCard = ({name, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginTop: 8,
  },
});
