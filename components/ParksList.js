import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, Alert } from 'react-native';
import { 
    MaterialIcons,
    MaterialCommunityIcons 
} from '@expo/vector-icons';

const iconSize = 35
export class ParksList extends React.Component {

  render() {
    const parks = [
     {
        "name": "Barton Park",
        "address": "2401 10th St N Arlington, VA 22201",
        "parking": true,
        "picnic": true,
        "garden": true
     },
     {
        "name": "Cleveland Park",
        "address": "1030 S Cleveland St Arlington, VA 22204",
        "picnic": true
     },
     {
        "name": "East Falls Church Park",
        "address": "1730 N Roosevelt St Arlington, VA 22205",
        "pond": true,
        "trail": true,
        "parking": true,
        "field": true,
        "basketball": true
     },
     {
        "name": "Rocky Run Park",
        "address": "1109 N Barton St Arlington, VA 22201",
        "basketball": true,
        "waterFountain": true,
        "field": true,
        "parking": true,
        "picnic": true,
        "restroom": true
     },
    ];

    return (
      <FlatList
        data={parks}
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

  _getParkingIcon = () => {
      return (
          <MaterialIcons
            name='local-parking'
            color='blue'
            style={styles.detailsItem}
            size={iconSize}
            onPress={() => this._handlePress("Has Public Parking")}
            />
      )
  }

  _getWaterIcon = () => {
      return (
          <MaterialCommunityIcons
            name='water-pump'
            color='blue'
            style={styles.detailsItem}
            size={iconSize}
            onPress={() => this._handlePress("Has Drinking Fountain")}
          />
      )
  }

  _getBasketballIcon = () => {
    return (
        <MaterialCommunityIcons
          name='basketball'
          color='orange'
          style={styles.detailsItem}
          size={iconSize}
          onPress={() => this._handlePress("Has Basketball Courts")}
        />
    )
  }

  _getFieldIcon = () => {
    return (
        <MaterialCommunityIcons
          name='soccer-field'
          color='green'
          style={styles.detailsItem}
          size={iconSize}
          onPress={() => this._handlePress("Has Playing Field")}
        />
    )
  }

  _getPinicIcon = () => {
    return (
        <MaterialCommunityIcons
          name='silverware-fork-knife'
          color='silver'
          style={styles.detailsItem}
          size={iconSize}
          onPress={() => this._handlePress("Has Eating Area")}
        />
    )
  }

  _getPondIcon = () => {
    return (
        <MaterialCommunityIcons
          name='waves'
          color='blue'
          style={styles.detailsItem}
          size={iconSize}
          onPress={() => this._handlePress("Has Pond or Lake")}
        />
    )
  }

  _getRestroomIcon = () => {
    return (
        <MaterialCommunityIcons
          name='toilet'
          color='gray'
          style={styles.detailsItem}
          size={iconSize}
          onPress={() => this._handlePress("Has Restrooms")}
        />
    )
  }

  _getGardenIcon = () => {
    return (
        <MaterialCommunityIcons
          name='flower'
          color='blue'
          style={styles.detailsItem}
          size={iconSize}
          onPress={() => this._handlePress("Has Community Garden")}
        />
    )
  }

  _getTrailIcon = () => {
    return (
        <MaterialCommunityIcons
          name='walk'
          color='tan'
          style={styles.detailsItem}
          size={iconSize}
          onPress={() => this._handlePress("Has Walking Trail")}
        />
    )
  }

  _handlePress = (message) => {
      Alert.alert(message)
  }

  _renderItem = ({ item }) => {
      let details = {}
      item.waterFountain ? details.waterFountain=this._getWaterIcon() : details.waterFountain = null
      item.parking ? details.parking=this._getParkingIcon() : details.parking = null
      item.picnic ? details.picnic=this._getPinicIcon() : details.picnic = null
      item.basketball ? details.basketball=this._getBasketballIcon() : details.basketball = null
      item.field ? details.field=this._getFieldIcon() : details.field = null
      item.trail ? details.trail=this._getTrailIcon() : details.trail = null
      item.pond ? details.pond=this._getPondIcon() : details.pond = null
      item.garden ? details.garden=this._getGardenIcon() : details.garden = null
      item.restroom ? details.restroom=this._getRestroomIcon() : details.restroom = null
    return (
        <View>
            <View>
                <Text style={styles.name}>
                    {item.name}
                </Text>
                <Text style={styles.address}>
                    {item.address}
                </Text>
            </View>
            <View style={styles.details}>
                {details.parking}
                {details.waterFountain}
                {details.picnic}
                {details.basketball}
                {details.field}
                {details.trail}
                {details.pond}
                {details.garden}
                {details.restroom}
            </View>
        </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  details: {
      flexDirection: 'row',
      marginTop: 5
  },
  detailsItem: {
      marginRight: 5
  },
  name: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 25
  },
  address: {
      textAlign: 'center',
      marginTop: 10
  },
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#766E6C',
    marginLeft: '5%',
    marginTop: 10,
    marginBottom: 10
  }  
});
