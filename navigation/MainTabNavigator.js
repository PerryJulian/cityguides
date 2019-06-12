import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EventsScreen from '../screens/EventsScreen'

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
  Restaurants: HomeScreen,
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
  Links: LinksScreen,
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
