import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Events } from '../components/Events'

export default function EventsScreen() {
    return (
      <ScrollView style={styles.container}>
        <Events />
      </ScrollView>
    );
  }

  EventsScreen.navigationOptions = {
    title: 'Events',
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
  });