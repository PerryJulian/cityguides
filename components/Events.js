import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import EventData from '../data/EventData'
import * as WebBrowser from 'expo-web-browser';

export class Events extends React.Component {
    render() {
        return (
          <FlatList
            data={EventData}
            keyExtractor={(item, index) => item.name}
            renderItem={this._renderItem}
            ItemSeparatorComponent={this._renderSeparator}
          />
        );
    }

    _renderSeparator = () => {
        return (
            <View style={styles.separator}></View>
        )
    }

    _renderItem = ({item}) => {
        return (
            <View style={{paddingBottom: 10}}>
                  <Event event={item}></Event>
            </View>
        )
    }

}

_handlePress = (url) => {
    WebBrowser.openBrowserAsync(url)
}

const Event = props => {
    return (
        <View style={styles.eventContainer}>
            <View style={styles.eventInfo}>
                <Text style={[styles.eventDate, styles.eventDetailItem]}>
                    {props.event.date}
                </Text>
                    <Text style={[styles.eventName, styles.eventDetailItem]}>
                        {props.event.name}
                    </Text>
                <Text style={[styles.eventTime, styles.eventDetailItem]}>
                    {props.event.location} / {props.event.time}
                </Text>
                <Text style={[styles.eventNotes,]}>
                    {props.event.notes}
                </Text>
                <Touchable style={styles.eventSite} onPress={() => this._handlePress(props.event.website)}>
                    <Text style={styles.eventSite}>More Info</Text>
                </Touchable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        marginBottom: 100
    },
    separator: {
        height: 3,
        width: '90%',
        backgroundColor: '#63959C',
        marginLeft: '5%',
        marginTop: 10,
        marginBottom: 10
    },
    eventInfo: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    eventDate: {
        color: '#577E14',
        textTransform: 'uppercase'
    },
    eventName: {
        color: '#D46961',
        fontSize: 18,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        flex: 1,
        paddingRight: 10
    },
    eventTime: {
        color: '#577E14'
    },
    eventLocation: {
        color: '#577E14'
    },
    eventDetailItem: {
        textAlign: 'center',
        marginBottom: 10
    },
    eventNotes: {
        fontStyle: 'italic',
        color: '#577E14',
        textAlign: 'center',
        fontSize: 10,
    },
    eventSite: {
        textAlign: 'center',
        marginBottom: 5,
        marginTop: 5,
        color: '#3D7982'
    }
})