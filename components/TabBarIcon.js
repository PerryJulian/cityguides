import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  let options = {
   size: 26,   
  }
  return (
    props.type !== 'foundation' ?
    <Ionicons
      name={props.name}
      size={options.size}
      style={styles.icons}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    /> :
    <Foundation 
      name={props.name}
      size={options.size}
      style={styles.icons}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}

const styles = StyleSheet.create({
  icons: {
    marginBottom: -3,
    backgroundColor: '#fff',
  }
});
