import React from 'react';
import { ParksList } from '../components/ParksList'
import Touchable from 'react-native-platform-touchable';
import { Button } from 'react-native'
import { ParkInfoKey } from '../components/ParkInfoKey'

export default function ParksScreen() {
  return (
    <ParksList />
    );
}

ParksScreen.navigationOptions = {
  title: 'Parks & Recreation',
  headerRight: (
    <ParkInfoKey/>
  )
};
