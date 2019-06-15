import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, Alert } from 'react-native';
// import { Park } from '../components/Park'
import {
    MaterialIcons,
    MaterialCommunityIcons
} from '@expo/vector-icons';

const iconSize = 35
const iconKey =[
  {
    "name": "parking",
    "className": "parking",
    "color": "blue",
    "alertText": "Has Public Parking"
  },
  {
    "name": "water",
    "className": "water-pump",
    "color": "blue",
    "alertText": "Has Drinking Fountain"
  },
  {
    "name": "parking",
    "className": "local-parking",
    "color": "blue",
    "alertText": "Has Public Parking"
  },
  {
    "name": "parking",
    "className": "local-parking",
    "color": "blue",
    "alertText": "Has Public Parking"
  },
  {
    "name": "parking",
    "className": "local-parking",
    "color": "blue",
    "alertText": "Has Public Parking"
  },
  {
    "name": "parking",
    "className": "local-parking",
    "color": "blue",
    "alertText": "Has Public Parking"
  },
  {
    "name": "parking",
    "className": "local-parking",
    "color": "blue",
    "alertText": "Has Public Parking"
  },
  {
    "name": "basketball",
    "className": "basketball",
    "color": "orange",
    "alertText": "Has Basketball Courts"
  },
]

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

  _getIcon = (props) => {
    // console.log(props)
    // this.message = props.alertText
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

  _detailsRenderer = ({item} ,field) => {

  }

  _renderItem = ({ item }) => {
      let details = { }
      let test = iconKey.find(key => key.name == 'basketball')
      // console.log(test)
      item.parking ? details.parking=<Icon props={iconKey.find(key => key.name == 'parking')}/> : details.parking = null
      // item.picnic ? details.picnic=this._getIcon(props=iconKey.find(key => key.name == 'picnic')): details.picnic = null
      item.basketball ? details.basketball=<Icon props={iconKey.find(key => key.name == 'basketball')}/> : details.basketball = null
      // item.field ? details.field=this._getIcon(props=iconKey.find(key => key.name == 'field')) : details.field = null
      // item.trail ? details.trail=this._getIcon(props=iconKey.find(key => key.name == 'trail')) : details.trail = null
      // item.pond ? details.pond=this._getIcon(props=iconKey.find(key => key.name == 'pond')) : details.pond = null
      // item.garden ? details.garden=this._getIcon(props=iconKey.find(key => key.name == 'garden')) : details.garden = null
      // item.restroom ? details.restroom=this._getIcon(props=iconKey.find(key => key.name == 'restroom')) : details.restroom = null
    // item.waterFountain ? details.waterFountain = this._getIcon(props = iconKey.find(key => key.name == 'water')) : details.waterFountain = null
    return (
      <View>
        <Park park={item} info={details}/>
      </View>
        // <View>
        //     <View style={styles.details}>
        //         {details.parking}
        //         {details.waterFountain}
        //         {details.picnic}
        //         {details.basketball}
        //         {details.field}
        //         {details.trail}
        //         {details.pond}
        //         {details.garden}
        //         {details.restroom}
        //     </View>
        // </View>
    )
  };
}

class Icon extends React.Component {
  constructor(props) {
    super(props)
    const {className, color, alertText} = props.props
    this.state = {
      className,
      color,
      alertText
    }
    // console.log(props)
    console.log(this.state)
  }

  _handlePress = () => {
    Alert.alert(this.state.alertMes)
  }

  render() {
    const {className, color, alert} = this.state
    // console.log(this.state)
    return (
      // <Text>The</Text>
      <MaterialCommunityIcons
        name={className}
        color={color}
        style={styles.detailsItem}
        size={iconSize}
        // onPress={(alertText) => this._handlePress}
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
  // console.log(props.info)
  return (
    <View style={styles.details}>
      {props.info.waterFountain}
      {props.info.parking}
      {props.info.basketball}
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
