import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen'
import RestaurantsScreen from '../screens/RestaurantsScreen'
import ParksScreen from '../screens/ParksScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

const RestaurantStack = createStackNavigator({
  Restaurants: RestaurantsScreen,
});

RestaurantStack.navigationOptions = {
  tabBarLabel: 'Restaurants',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-beer`
          : 'md-beer'
      }
    />
  ),
};

const AdventureStack = createStackNavigator({
  Parks: ParksScreen,
});

AdventureStack.navigationOptions = {
  tabBarLabel: 'Parks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      type='foundation'
      focused={focused}
      name={Platform.OS === 'ios' ? 'trees' : 'trees'}
    />
  ),
};

const EventsStack = createStackNavigator({
  EventsStack: EventsScreen,
});

EventsStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  EventsStack,
  AdventureStack,
  RestaurantStack
});
