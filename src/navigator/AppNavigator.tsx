import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ExploreScreen from '../screens/Explore';
import ProfileScreen from '../screens/Profile';
import RestaurantsScreen from '../screens/Restaurants';
import RestaurantScreen from '../screens/Restaurant';

import ExploreIcon from '../icons/ExploreIcon';
import RestaurantIcon from '../icons/RestaurantIcon';
import ProfileIcon from '../icons/ProfileIcon';

// RootParams
export type RootParams = {
  ExploreStack: undefined;
  RestaurantsStack: undefined;
  Profile: undefined;
};

// Drawer
const Drawer = createDrawerNavigator<RootParams>();

// BottomTab
const BottomTab = createBottomTabNavigator<RootParams>();

// ExploreStack
export type ExploreStackParams = {
  Explore: undefined;
  Restaurant: {
    name: string;
  };
};

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreStackNavigator = () => {
  return (
    <ExploreStack.Navigator
      initialRouteName="Explore"
      screenOptions={{
        headerShown: false,
      }}>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="Restaurant" component={RestaurantScreen} />
    </ExploreStack.Navigator>
  );
};

// RestaurantsStack
export type RestaurantsStackParams = {
  Restaurants: undefined;
  Restaurant: {
    name: string;
  };
};

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();

const RestaurantsStackNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      initialRouteName="Restaurants"
      screenOptions={{
        headerShown: false,
      }}>
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen name="Restaurant" component={RestaurantScreen} />
    </RestaurantsStack.Navigator>
  );
};

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="ExploreStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="ExploreStack"
        component={ExploreStackNavigator}
        options={{
          drawerIcon: ({color, size}) => (
            <ExploreIcon color={color} size={size} />
          ),
          drawerLabel: 'Explore',
        }}
      />
      <Drawer.Screen
        name="RestaurantsStack"
        component={RestaurantsStackNavigator}
        options={{
          drawerIcon: ({color, size}) => (
            <RestaurantIcon color={color} size={size} />
          ),
          drawerLabel: 'Restaurants',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <ProfileIcon color={color} size={size} />
          ),
          drawerLabel: 'Profile',
        }}
      />
    </Drawer.Navigator>
  );
};

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ExploreStack"
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="ExploreStack"
        component={ExploreStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <ExploreIcon color={color} size={size} />
          ),
          tabBarLabel: 'Explore',
        }}
      />
      <BottomTab.Screen
        name="RestaurantsStack"
        component={RestaurantsStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <RestaurantIcon color={color} size={size} />
          ),
          tabBarLabel: 'Restaurants',
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <ProfileIcon color={color} size={size} />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </BottomTab.Navigator>
  );
};

// export default AppNavigator;
