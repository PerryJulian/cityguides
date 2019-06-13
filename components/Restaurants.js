import React from 'react';
import { Text, View, StyleSheet, SectionList } from 'react-native';

export class Restaurants extends React.Component {
    render() {
        const sections = [
            {title: 'American',
                data: [
                    {
                        "name": "Ambar Clarendon",
                        "price": "$$",
                        "number": '703-875-9663',
                        "address": "2901 Wilson Blvd."
                    },
                    {
                        "name": "Arlington Rooftop Bar & Grill",
                        "price": "$$",
                        "number": '703-528-3030',
                        "address": "2424 Wilson Blvd."
                    },
                    {
                        "name": "Ambar Clarendon",
                        "price": "$$",
                        "number": '703-875-9663',
                        "address": "2901 Wilson Blvd."
                    }
                ]
            },
            {title: 'Chinese', data: ['item3', 'item4']},
            {title: 'Italian', data: ['item3', 'item4']},
            {title: 'Mexican', data: ['item5', 'item6']},
        ]
        return (
            <SectionList style={styles.container}
                renderItem={this._renderItem}
                renderSectionHeader={this._renderSectionHeader}
                stickySectionHeadersEnabled={true}
                keyExtractor={(item, index) => index}
                sections={sections}
            />
        );
    }

    _renderSectionHeader = ({section}) => {
        return <SectionHeader title={section.title} />
    }

    _renderItem = ({item}) => {
        // console.log(item)
     return (
         <View>
             <Text>{item.name}</Text>
             <Text>{item.address}</Text>
             <Text>{item.number}</Text>
             <Text>{item.price}</Text>
         </View>
     )
    }
}

const SectionHeader = ({title}) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    comingSoonText: {
        fontStyle: 'italic',
        textAlign: 'center'
    }
})