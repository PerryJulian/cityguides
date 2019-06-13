import React from 'react';
import { ParksList } from '../components/ParksList'

export default function ParksScreen() {
  return (
    <ParksList />
    );
}

ParksScreen.navigationOptions = {
  title: 'Parks & Recreation',
};
