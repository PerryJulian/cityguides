import React from 'react';
import { FlatList, StyleSheet, Text, View, Alert } from 'react-native';
import {
    MaterialCommunityIcons
} from '@expo/vector-icons';
import IconData from '../data/IconData'
import ParkData from '../data/ParkData'

const iconSize = 35

export class ParksList extends React.Component {


  render() {

    return (
      <FlatList
        data={ParkData}
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

  _getIcon = (props) => {
    return (
      <MaterialCommunityIcons
        name={props.className}
        color={props.color}
        style={styles.detailsItem}
        size={iconSize}
        onPress={this._handlePress}
      />
    )
  }

  _handlePress = () => {
      Alert.alert(this.message)
  }

  _renderItem = ({ item }) => {
      let details = { }
      item.parking ? details.parking = <Icon iconAttr = {IconData.find(key => key.name == 'parking')} /> : details.parking = null
      item.picnic ? details.picnic = <Icon iconAttr = {IconData.find(key => key.name == 'picnic')} /> : details.picnic = null
      item.basketball ? details.basketball = <Icon iconAttr={IconData.find(key => key.name == 'basketball')}/> : details.basketball = null
      item.field ? details.field = <Icon iconAttr = {IconData.find(key => key.name == 'field')}/> : details.field = null
      item.trail ? details.trail = <Icon iconAttr = {IconData.find(key => key.name == 'trail')} /> : details.trail = null
      item.pond ? details.pond = <Icon iconAttr = {IconData.find(key => key.name == 'pond')} /> : details.pond = null
      item.garden ? details.garden = <Icon iconAttr = {IconData.find(key => key.name == 'garden')} /> : details.garden = null
      item.restroom ? details.restroom = <Icon iconAttr = {IconData.find(key => key.name == 'restroom')} /> : details.restroom = null
    item.waterFountain ? details.waterFountain = <Icon iconAttr = {IconData.find(key => key.name == 'waterFountain')} /> : details.waterFountain = null
    return (
      <View>
        <Park park={item} info={details}/>
      </View>
    )
  };
}

class Icon extends React.Component {
  constructor(props) {
    super(props)
    const {className, color, alertText} = props.iconAttr
    this.state = {
      className,
      color,
      alertText
    }
  }

  _handlePress = () => {
    Alert.alert(this.state.alertText)
  }

  render() {
    return (
      <MaterialCommunityIcons
        name={this.state.className}
        color={this.state.color}
        style={styles.detailsItem}
        size={iconSize}
        onPress={this._handlePress}
      />
    )
  }
}

const Park = props => {
  return <View>
    <View>
      <Text style={styles.name}>
        {props.park.name}
      </Text>
      <Text style={styles.address}>
        {props.park.address}
      </Text>
      <ParkInfo info={props.info}/>
    </View>
  </View>
}

const ParkInfo = props => {
  return (
    <View style={styles.details}>
      {props.info.waterFountain}
      {props.info.parking}
      {props.info.basketball}
      {props.info.field}
      {props.info.picnic}
      {props.info.trail}
      {props.info.garden}
      {props.info.restroom}
      {props.info.pond}
    </View>
  )
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
