import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class Events extends React.Component {
    render() {
        return (
          <View style={styles.container}>
              <Text style={styles.comingSoonText}>
                  More Events Coming Soon!
              </Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'stretch'
    },
    comingSoonText: {
        fontStyle: 'italic',
        textAlign: 'center'
    }
})