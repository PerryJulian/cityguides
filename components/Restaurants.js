import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Text, View, StyleSheet, SectionList } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Call from 'react-native-phone-call'

export class Restaurants extends React.Component {
    render() {
        const sections = [
            {
                title: 'American',
                data: [
                    {
                        "name": "Ambar Clarendon",
                        "price": "$$",
                        "number": "7038759663",
                        "address": "2901 Wilson Blvd",
                        "website": "https://www.ambarrestaurant.com/home-page-clarendon/"
                    },
                    {
                        "name": "Arlington Rooftop Bar & Grill",
                        "price": "$$",
                        "number": '7035283030',
                        "address": "2424 Wilson Blvd",
                        "website": "http://www.arlrooftop.com/"
                    },
                    {
                        "name": "Basic Burger",
                        "price": "$$",
                        "number": '7033729486',
                        "address": "1101 S. Joyces Street"
                    }
                ]
            },
            {
                title: 'Chinese', 
                data: [
                    {
                        "name": "Peter Change Arlington",
                        "price": "$$",
                        "number": "7038759663",
                        "address": "2503E N. Harrison Street",
                        "website": "https://peterchangarlington.com//"
                    }
                ]
            },
            {
                title: 'Italian', 
                data: [
                    {
                        "name": "The Italian Store",
                        "price": "$",
                        "number": "7035286266",
                        "address": "3123 Lee Highway",
                        "website": "https://www.ambarrestaurant.com/home-page-clarendon/"
                    },
                    {
                        "name": "Pinzimini",
                        "price": "$$",
                        "number": '7035374200',
                        "address": "801 N. Glebe Road",
                        "website": "https://www.pinzimini.com/"
                    }
                ]
            },
            {
                title: 'Mexican', 
                data: [
                    {
                        "name": "District Taco",
                        "price": "$$",
                        "number": "7032371204",
                        "address": "1500 Wilson Blvd",
                        "website": "https://www.districttaco.com/"
                    },
                    {
                        "name": "Don Tito",
                        "price": "$$",
                        "number": "7035663113",
                        "address": "3165 Wilson Blvd",
                        "website": "https://www.dontitova.com/"
                    },
                    {
                        "name": "Mexicali Blues",
                        "price": "$$",
                        "number": '7038129352',
                        "address": "2933 S. Joyces Street"
                    }
                ]
            },
        ]
        return (
            <SectionList style={styles.container}
                renderItem={this._renderItem}
                renderSectionHeader={this._renderSectionHeader}
                stickySectionHeadersEnabled={true}
                keyExtractor={(item, index) => index}
                sections={sections}
                ItemSeparatorComponent={this._renderSeparator}
            />
        );
    }

    _makeCall = (number) => {
        const args = {
            number,
            prompt: false
        }
        Call(args).catch(console.error)
    }

    _handlePress = (url) => {
        WebBrowser.openBrowserAsync(url)
    }

    _renderSeparator = () => {
        return (
          <View style={styles.separator}></View>
        )
      }

    _renderSectionHeader = ({section}) => {
        return (
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
        )
    }

    _renderItem = ({item}) => {
        let phoneNum
        let callnumber
        let website
        if (item.number) {
            callnumber = JSON.stringify(item.number)
            phoneNum = `${callnumber.substr(1,3)}-${callnumber.substr(4,3)}-${callnumber.substr(7,4)}`
        }

        if (item.website) {
            website = 
            <Touchable onPress={() => this._handlePress(item.website)}>
                <Text style={styles.website}>
                    Website
                </Text>
            </Touchable>
        }
        
     return (
         <View style={styles.row}>
             <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.address}>{item.address}</Text>
                <Touchable onPress={() => this._makeCall(item.number)}>
                    <Text style={styles.number}>
                        {phoneNum}
                    </Text>
                </Touchable>
                {website}
             </View>
             <View>
                <Text style={styles.price}>{item.price}</Text>
             </View>
         </View>
     )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    sectionHeader: {
        backgroundColor: '#766E6C',
    },
    sectionHeaderText: {
        color: '#fff',
        padding: 15,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    separator: {
        height: 1,
        width: '90%',
        backgroundColor: '#766E6C',
        marginLeft: '5%',
    },
    price: {
        color: 'green'
    },
    number: {
        color: '#4286f4',
        marginTop: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 10
    },
    website: {
        fontWeight: 'bold',
        marginTop: 5
    }
})